import React from 'react';
import {
  OUTGOING_LOG__KEY__, INCOMMING_LOG__KEY__, MISSED_LOG__KEY__, COULDNT_CONNECT_LOG__KEY__,
} from "../constants";
import { CallReceived, CallMade, CallMissed, CallMissedOutgoing } from '@material-ui/icons';

const CallTypeLogIcon = ({ callType }) => {
  const GetIcon = () => {
    switch (callType) {
      case OUTGOING_LOG__KEY__:
        return <CallMade />;
      case MISSED_LOG__KEY__:
        return <CallMissed />;
      case INCOMMING_LOG__KEY__:
        return <CallReceived />;
      case COULDNT_CONNECT_LOG__KEY__:
        return <CallMissedOutgoing />;
      default:
        return '';
    }
  }
  return (
    <GetIcon />
  )
}

export default CallTypeLogIcon
