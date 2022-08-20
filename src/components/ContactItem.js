import React from 'react';
import '../style/scss/ContactItem.scss';
import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

export default function ContactItem({ data }) {
  return (
    <div className="contactItem" key={data.id}>
      <Button startIcon={<Avatar />}>
        {data.name}
      </Button>
    </div>
  )
}
