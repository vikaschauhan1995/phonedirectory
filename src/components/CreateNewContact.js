import React from 'react'
import '../style/scss/CreateNewContact.scss';
import { PersonAddOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';

export default function CreateNewContact() {
  return (
    <div className="createNewContact">
      <Button variant="text" startIcon={<PersonAddOutlined />}>
        Create new contact
      </Button>
    </div>
  )
}
