import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ newContact }) => {

    const { name, lastName, email, online } = newContact;

    return (
        <div>
            <h3> Name: { lastName }, { name }</h3>
            <h3> Email: { email }</h3>
            <h5>
                <em>{ name }</em> is {online ? 'ONLINE' : 'OFFLINE'}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;


