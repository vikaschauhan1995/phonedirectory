import React from 'react';
import { SEARCH_CONTACT_PLACEHOLDER__TEXT__ } from '../constants/index';
import '../style/scss/Header.scss';
import { Search, MoreVertOutlined, Mic } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import variable from '../style/_variables.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div style={{ padding: variable.primaryPadding }}>
          <Search />
        </div>
        <div className="header__search">
          <form>
            <input type="text" placeholder={SEARCH_CONTACT_PLACEHOLDER__TEXT__} />
          </form>
        </div>
        <div className="header__right">
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Header
