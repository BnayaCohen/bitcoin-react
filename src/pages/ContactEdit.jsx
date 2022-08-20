import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { contactService } from '../services/contactService.js'

export function ContactEdit() {

    const [contact, setContact] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchContact() {
            const contactId = params.id
            const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
            setContact(contact)
        }
        fetchContact()
    }, [params.id])

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setContact(contact => ({ ...contact, [field]: value }))
    }

    const onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...contact })
        navigate('/contact')
    }

    const inputRefFunc = (elInput) => {
        elInput && elInput.focus()
    }

    if (!contact) return <div>Loading...</div>

    return (
        <section className='contact-edit'>
            <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
            <form onSubmit={onSaveContact}>
                <label htmlFor="name">Name</label>
                <input ref={inputRefFunc} value={contact.name} onChange={handleChange} type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input value={contact.email} onChange={handleChange} type="email" name="email" id="email" />
                <label htmlFor="phone">Phone</label>
                <input value={contact.phone} onChange={handleChange} type="text" name="phone" id="phone" />
                <button className='btn'>Save</button>
            </form>
        </section>
    )
}