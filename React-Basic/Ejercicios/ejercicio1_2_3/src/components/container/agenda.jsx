import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';

export const Agenda = () => {

    const newContact = new Contact('Ismael', 'Rosas','ismaelnelsonrosas@gmail.com', false);
    
    return (
        <div>
            <div>
                <h1>
                Your Contact:
                </h1>
            </div>
            <ContactComponent newContact={newContact} />
        </div>
    );
};
