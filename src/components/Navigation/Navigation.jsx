import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import { Header, StyledNavBar, StyledNavLink } from './Navigation.styled';
import AuthNav from 'components/AuthNav/AuthNav';
import { Spin } from 'antd';

const Navigation = () => {
  const authentificated = useSelector(selectAuthentificated);
  return (
    <>
      <Header>
        <StyledNavBar>
          <StyledNavLink to="/">Home</StyledNavLink>

          {authentificated && (
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          )}
        </StyledNavBar>
        {authentificated ? <UserMenu /> : <AuthNav />}
      </Header>
      <div>
        <main>
          <Suspense fallback={<Spin />}></Suspense>
        </main>
      </div>
    </>
  );
};

export default Navigation;
