import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {

  const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
  return (
    <article className="contact-preview flex">
      <Link to={`/contact/${contact._id}`}>
        <div className="contact-img" style={contactStyle}></div>
        <p>{contact.name}</p>
      </Link>
      <section className='actions'>
        <button onClick={() => onRemoveContact(contact._id)}>Delete</button>
        <Link to={`/contact/edit/${contact._id}`} >Edit</Link>
      </section>
    </article>
  )
}
