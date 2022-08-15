import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contactService.js'

export class ContactDetailsPage extends Component {

  state = {
    contact: null
  }

  componentDidMount() {
    this.loadContact()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }

  async loadContact() {
    const contactId = this.props.match.params.id
    const contact = await contactService.getContactById(contactId)
    this.setState({ contact })
  }

  onBack = () => {
    this.props.history.push('/contact')
    // this.props.history.goBack()
  }

  render() {
    const { contact } = this.state

    if (!contact) return <div>Loading...</div>
    return (
      <article className='contact-details'>
        <img src={`https://robohash.org/${contact._id}`} alt="" />
        <p>Name: {contact.name}</p>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <button onClick={this.onBack}>Back</button>
        <Link to={'/contact/edit/' + contact._id} >Edit contact</Link>
      </article>
    )
  }
}
