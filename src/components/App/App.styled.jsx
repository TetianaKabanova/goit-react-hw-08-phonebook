import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSize.l};
  padding: 15px 25px;
  margin-right: 20px;
  margin-top: 20px;
  border-radius: ${p => p.theme.space[2]}px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.light};
  display: inline-block;
  text-decoration: none;

  transition: all 0.3s ease;

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
