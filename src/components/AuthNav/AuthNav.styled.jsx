import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[4]}px;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  border-radius: ${props => props.theme.spacing(12)};
  border: 1px solid #007bff;
  border-spacing: 0;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing(1.5)};
  padding-bottom: ${props => props.theme.spacing(1.5)};

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
  }
`;
