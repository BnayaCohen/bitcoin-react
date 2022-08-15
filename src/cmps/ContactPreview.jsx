import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {

  const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
  return (
    <article className="contact-preview">
      <Link className='flex align-center' to={`/contact/${contact._id}`}>
        <div className="contact-img" style={contactStyle}></div>
        <div>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
        </div>
      </Link>
      <section className='actions'>
        <button className='btn' onClick={() => onRemoveContact(contact._id)}>Delete</button>
        <Link className='btn' to={`/contact/edit/${contact._id}`} >Edit</Link>
      </section>
    </article>
  )
}
