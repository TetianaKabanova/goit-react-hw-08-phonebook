import styled from '@emotion/styled';
import { Button } from 'antd';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => props.theme.spacing(16)};
  padding-right: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(4)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.mainBackground};
  box-shadow: ${props => props.theme.boxShadow.boxShadow};
`;

export const StyledLogOutButton = styled(Button)``;

export const StyledNavBar = styled.nav`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing(4)};
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledNavLink = styled(Button)``;
