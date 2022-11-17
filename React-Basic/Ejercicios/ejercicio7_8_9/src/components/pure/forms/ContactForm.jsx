/*Este formulario me permitira trabajar con los datos para crear una nueva tarea para tasklist*/
import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact.class';


const ContactForm = ({ add }) => {

  const nameRef = useRef('')
  const statusRef = useRef('')

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      statusRef.current.value,
      false
    )
    add(newContact);
  }

  return (
    <form onSubmit={addContact} className=' px-2 mt-5 mx-4' style={{height:'18rem'}}>
      <div className='card p-4'>
        <h4 className='text-center'>Contact Form</h4>
        <div className='form-outline flex-fill d-flex flex-column gap-2'>
          <input type="text" ref={nameRef}    placeholder='Contact Name' required autoFocus/>
          <input type="text" ref={statusRef}  placeholder='Add Something cool!' required />
        </div>
        <button type='submit' className='btn btn-sm btn-outline-secondary my-5'> Add Contact</button>
      </div>
    </form>
  )
}

ContactForm.protoTypes = {
  add: PropTypes.func.isRequired
}

export default ContactForm;
