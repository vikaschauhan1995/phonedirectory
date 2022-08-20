import React, { useState, useEffect } from 'react'
import '../style/scss/Body.scss';
import Favourite from './Favourite';
import Recent from './Recent';
import Contact from './Contact';
import {
  TAB_FAVOURITE__KEY__,
  TAB_RECCENT__KEY__,
  TAB_CONTACTS__KEY__,
} from '../constants';

function Body({ activeTab }) {
  const ActiveTab = () => {
    switch (activeTab) {
      case TAB_FAVOURITE__KEY__:
        return <Favourite />;
      case TAB_RECCENT__KEY__:
        return <Recent />;
      case TAB_CONTACTS__KEY__:
        return <Contact />;
      default:
        return <Recent />;
    }
  };
  return (
    <div className="body">
      <ActiveTab />
    </div>
  )
}

export default Body
