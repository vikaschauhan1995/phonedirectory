import React from 'react';
import '../style/scss/RecentItem.scss';
import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { NAME__KEY__, CALL_ON__KEY__, TYPE__KEY__, TIME__KEY__ } from '../constants';
import CallOnLogIcon from './CallOnLogIcon';
import CallTypeLogIcon from './CallTypeLogIcon';
import { LocalPhone } from '@material-ui/icons';

export default function RecentItem({ data }) {
  const name_const = data[NAME__KEY__];
  const name_string = name_const.toString();
  const name = name_string.toLocaleLowerCase();
  return (
    <div className="recentItems">
      <Button startIcon={<Avatar />}>
        <div className="recentItems__info">
          <div className="recentItems__detail">
            <span>{name}<CallOnLogIcon callOn={data[CALL_ON__KEY__]} /></span>
            <span><CallTypeLogIcon callType={data[TYPE__KEY__]} />{data[TIME__KEY__]}</span>
          </div>
          <Button>
            <LocalPhone />
          </Button>
        </div>
      </Button>
    </div>
  )
}
