import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userAuth from './userAuth';

const UserMenu = () => {
  const { user } = userAuth();
  const dispatch = useDispatch();

  return <div>UserMenu</div>;
};

export default UserMenu;
