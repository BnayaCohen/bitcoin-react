import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onSelectContactId, onRemoveContact }) {
    return (
        <section className='contact-list'>
            {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} />)}
        </section>
    )
}
