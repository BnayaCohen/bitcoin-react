import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MovesList } from '../cmps/MovesList';
import { TransferFund } from '../cmps/TransferFund';
import { loadContact } from '../store/actions/contactActions'
import { userService } from '../services/userService.js'

export function ContactDetailsPage() {

  const [movesList, setMovesList] = useState([])
  const currUser = useSelector(state => state.userModule.loggedInUser)
  const currContact = useSelector(state => state.contactModule.currContact)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    dispatch(loadContact(params.id))
  }, [params.id])

  const loadMovesList = (user) => {
    const userMoves = user.moves.filter(move => move.toId === currContact._id)
    setMovesList(userMoves)
  }

  const onBack = () => {
    navigate('/contact')
  }

  const onTransferCoins = (contact, amount) => {
    const user = userService.addMove(contact, amount)
    loadMovesList(user)
  }

  if (!currContact) return <div>Loading...</div>
  return (
    <>
      <article className='contact-details'>
        <img src={`https://robohash.org/${currContact._id}`} alt="" />
        <h1>{currContact.name}</h1>
        <p><span>Phone: </span>{currContact.phone}</p>
        <p><span>Email: </span>{currContact.email}</p>
        <button className='btn' onClick={onBack}>Back</button>
        <Link className='btn' to={'/contact/edit/' + currContact._id} >Edit contact</Link>
      </article>
      <TransferFund contact={currContact} maxCoins={currUser.coins} onTransferCoins={onTransferCoins} />
      <MovesList title={'Your Moves:'} movesList={movesList} />
    </>
  )
}