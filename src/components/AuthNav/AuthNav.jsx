import { AuthContainer, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthContainer>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </AuthContainer>
  );
};

export default AuthNav;
