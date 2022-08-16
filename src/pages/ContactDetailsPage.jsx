import { Component } from 'react'
import { Link } from 'react-router-dom'
import { MovesList } from '../cmps/MovesList';
import { TransferFund } from '../cmps/TransferFund';
import { contactService } from '../services/contactService.js'
import { userService } from '../services/userService.js'

export class ContactDetailsPage extends Component {

  state = {
    currUser: null,
    contact: null,
    movesList: [],
  }

  componentDidMount() {
    this.loadContact()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }

  loadContact = async () => {
    const contactId = this.props.match.params.id
    const contact = await contactService.getContactById(contactId)
    const user = userService.getUser()
    this.setState({ contact, currUser: user }, () => { this.loadMovesList(user) })

  }

  loadMovesList = (user) => {
    const { contact } = this.state
    const userMoves = user.moves.filter(move => move.toId === contact._id)
    this.setState({ movesList: userMoves, currUser: user })
  }

  onBack = () => {
    this.props.history.push('/contact')
    // this.props.history.goBack()
  }

  onTransferCoins = (contact, amount) => {
    const user = userService.addMove(contact, amount)
    this.loadMovesList(user)
  }

  render() {
    const { contact, currUser, movesList } = this.state

    if (!contact) return <div>Loading...</div>
    return (
      <>
        <article className='contact-details'>
          <img src={`https://robohash.org/${contact._id}`} alt="" />
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <button className='btn' onClick={this.onBack}>Back</button>
          <Link className='btn' to={'/contact/edit/' + contact._id} >Edit contact</Link>
        </article>
        <TransferFund contact={contact} maxCoins={currUser.coins} onTransferCoins={this.onTransferCoins} />
        <MovesList title={'Your Moves:'} movesList={movesList} />
      </>
    )
  }
}
