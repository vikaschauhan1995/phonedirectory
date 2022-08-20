import React from 'react';
import {
  WIFI_CALLING__KEY__, HD_CALLING__KEY__, DEFAULT__KEY__
} from '../constants';
import { Hd, Wifi } from '@material-ui/icons';

const CallOnLogIcon = ({ callOn }) => {
  const GetCollOn = () => {
    switch (callOn) {
      case WIFI_CALLING__KEY__:
        return <Hd />;
      case HD_CALLING__KEY__:
        return <Wifi />
      default:
        return "";
    }
  }
  return (
    <GetCollOn />
  )
}

export default CallOnLogIcon;
