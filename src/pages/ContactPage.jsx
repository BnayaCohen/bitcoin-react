import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'

export function ContactPage() {

    const contacts = useSelector(state => state.contactModule.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContacts())
    }, [])

    const onRemoveContact = async (contactId) => {
        dispatch(await removeContact(contactId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }

    if (!contacts) return <div>Loading...</div>
    return (
        <div className='contact-page'>
            <ContactFilter onChangeFilter={onChangeFilter} />
            <Link className='btn' to="/contact/edit">Add Contact</Link>
            <ContactList onRemoveContact={onRemoveContact} contacts={contacts} />
        </div>
    )
}