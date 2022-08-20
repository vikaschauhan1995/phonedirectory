import React from 'react'
import '../style/scss/Footer.scss';
import { StarBorder, Star, AccessTime, AccessTimeTwoTone, Group, GroupOutlined, Dialpad } from '@material-ui/icons';
import { IconButton, Button } from '@material-ui/core';
import {
  TAB_FAVOURITE__KEY__,
  TAB_RECCENT__KEY__,
  TAB_CONTACTS__KEY__,
} from '../constants';

function Footer({ activeTab, setActiveTab }) {
  return (
    <div className="footer__parentContainer">
      <div className="footer__dialpad">
        <div className="flexi"></div>
        <Button variant="contained">
          <Dialpad />
        </Button>
      </div>
      <div className="footer">
        <div className="item">
          <IconButton onClick={() => setActiveTab(TAB_FAVOURITE__KEY__)}>
            {activeTab == TAB_FAVOURITE__KEY__ ? <Star /> : <StarBorder />}
          </IconButton>
        </div>
        <div className="item">
          <IconButton onClick={() => setActiveTab(TAB_RECCENT__KEY__)}>
            {activeTab == TAB_RECCENT__KEY__ ? <AccessTimeTwoTone /> : <AccessTime />}
          </IconButton>
        </div>
        <div className="item">
          <IconButton onClick={() => setActiveTab(TAB_CONTACTS__KEY__)}>
            {activeTab == TAB_CONTACTS__KEY__ ? <Group /> : <GroupOutlined />}
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Footer;