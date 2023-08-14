import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Container, StyledNavLink } from './App.styled';
import { lazy, Suspense, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>

    // <Container>
    //   <Section title="Phonebook">
    //     <ContactForm />
    //   </Section>
    //   <ToastContainer />
    //   <Section title="Contacts">
    //     <Filter title="Find contact by name" />
    //     <ContactList />
    //   </Section>
    //   <ToastContainer />
    // </Container>
  );
};
