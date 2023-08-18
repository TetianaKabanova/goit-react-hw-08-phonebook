import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
import {
  Header,
  StyledNavBar,
  StyledLogOutButton,
  StyledNavLink,
  Icon,
} from './App.styled';
import { Spin } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegistrePage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div>
      <Header>
        <StyledNavBar>
          <StyledNavLink to="/">Home</StyledNavLink>

          {authentificated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <StyledLogOutButton type="submit" onClick={handleLogOut}>
                Log Out
                <Icon>
                  <LogoutOutlined />
                </Icon>
              </StyledLogOutButton>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </StyledNavBar>
      </Header>
      <main>
        <Suspense fallback={<Spin />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </main>
    </div>
  );
};
