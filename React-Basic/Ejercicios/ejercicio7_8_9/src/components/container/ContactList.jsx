import React, { useState } from 'react';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/ContactComponent';
import ContactForm from '../pure/forms/ContactForm';

const ContactList = () => {

    const defaultContact  = new Contact('Ismael',   'Life its better with Code and Smoothie',    true);
    const defaultContact1 = new Contact('Natasha',  'Life its better with Fruit and a Keyboard', false);
    const defaultContact2 = new Contact('Ludovika', 'Life its better with React and Loops',       true);
    const defaultContact3 = new Contact('Roma',     'Life its better with Mate and FrontEnd',    false);
    const defaultContact4 = new Contact('Joaquin',  'Life its better with a Smile',              true);

    const [contacts, setContacts] = useState([defaultContact, defaultContact1, defaultContact2, defaultContact3]);
    const [newContact, setNewContact] = useState(true);


    function createContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }


    function remove(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts)
    }


    function conectar(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts]
        tempContacts[index].online = !tempContacts[index].online
        setContacts(tempContacts);
    }


    function displayForm() {
        setNewContact(!newContact);
    }


    return (
        <div className='d-flex justify-content-center my-4'>
            <div className='col-11'>

                {/* CARD */}
                <div className='card' style={{ minHeight: '20rem' }}>

                    {/* Card Header */}
                    <div className='card-header' >
                        <h3 className='d-flex justify-content-center my-2'>
                            YOUR FRIENDS
                        </h3>
                        <div>
                            {/* This icon lets display the Contact Form if 'newContact' status is true */}
                            <i onClick={displayForm} className="bi bi-person-plus-fill" style={{ cursor: 'pointer' }}>Add New Contact</i>
                        </div>
                    </div>
                    {/* Body Container */}
                    <div className='d-flex'>
                        <div className='card-body d-flex flex-wrap justify-content-start mx-5'>
                            {/* Card Body */}
                            {contacts.map((contact, index) => {
                                return (
                                    <ContactComponent contact={contact} key={index} conectar={conectar} remove={remove} />
                                )
                            })}

                        </div>

                        {/* ContactForm Section */}
                        {newContact && (
                            <ContactForm add={createContact} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactList;
