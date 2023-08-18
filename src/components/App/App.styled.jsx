import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => props.theme.spacing(14)};
  padding-right: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(4)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.mainBackground};
  box-shadow: ${props => props.theme.boxShadow.boxShadow};
  font-size: ${props => props.theme.fontSize.m};
`;

export const StyledNavBar = styled.nav`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing(4)};
  flex-wrap: wrap;
  justify-content: center;
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

export const StyledLogOutButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSize.s};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  color: ${p => p.theme.colors.light};
  border: ${p => p.theme.border.none};
  border-radius: ${props => props.theme.spacing(4)};
  transition: background-color 0.3s ease;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.danger};
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;

export const Icon = styled.span`
  margin-left: ${props => props.theme.spacing(2)};
`;
