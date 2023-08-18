import { LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/authReducer';
import {
  Icon,
  StyledLogOutButton,
  UserHello,
  UserMenuContainer,
} from './UserMenu.styled';
import { logoutUserThunk } from 'redux/operations';

const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <UserMenuContainer>
      <UserHello>Hello, {userName}</UserHello>
      <StyledLogOutButton type="submit" onClick={handleLogOut}>
        Log Out
        <Icon>
          <LogoutOutlined />
        </Icon>
      </StyledLogOutButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
