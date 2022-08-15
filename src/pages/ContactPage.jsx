import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { contactService } from '../services/contactService'

export class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onRemoveContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.loadContacts()
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts } = this.state

        if (!contacts) return <div>Loading...</div>
        return (
            <div className='contact-page'>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <Link to="/contact/edit">Add Contact</Link>
                <ContactList onRemoveContact={this.onRemoveContact} contacts={contacts} />
            </div>
        )
    }
}
