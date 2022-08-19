import React from 'react'
import '../style/scss/Footer.scss';
import { StarBorder, star, AccessTime, AccessTimeTwoTone, Group, GroupOutlined, Dialpad } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Footer() {
  return (
    <div className="footer__parentContainer">
      <div className="footer__dialpad">
        <div className="flexi"></div>
        <IconButton>
          <Dialpad />
        </IconButton>
      </div>
      <div className="footer">
        <div className="item">
          <IconButton>
            <StarBorder />
          </IconButton>
        </div>
        <div className="item">
          <IconButton>
            <AccessTime />
          </IconButton>
        </div>
        <div className="item">
          <IconButton>
            <GroupOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Footer;