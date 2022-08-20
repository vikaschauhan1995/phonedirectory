import React from 'react';
import ContactItem from './ContactItem';
import CreateNewContact from './CreateNewContact';
import { contactListData } from '../constants';

const Contact = () => {
  const ContactList = () => {
    const list = contactListData.map(contact => {
      return <ContactItem data={contact} key={contact.id} />
    });
    return list;
  }
  return (
    <div className="contact">
      <CreateNewContact />
      <ContactList />
    </div>
  )
}

export default Contact
