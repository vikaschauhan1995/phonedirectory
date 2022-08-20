import React from 'react'
import RecentItem from './RecentItem';
import { recentItemList } from '../constants';

const Recent = () => {
  const RecentContactList = () => {
    const list = recentItemList.map(item => {
      return <RecentItem data={item} key={item.id} />
    });
    return list;
  }
  return (
    <div>
      <RecentContactList />
    </div>
  )
}

export default Recent
