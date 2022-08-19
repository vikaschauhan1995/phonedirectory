import React, { useState, useEffect } from 'react'
import '../style/scss/Body.scss';
import Favourite from './Favourite';
import Recent from './Recent';
import Contact from './Contact';

function Body() {
  const [activeTab, setActiveTab] = useState();
  return (
    <div className="body">
      <Favourite />
      <Recent />
      <Contact />
    </div>
  )
}

export default Body
