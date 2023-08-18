import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[4]}px;
`;

export const UserHello = styled.h1`
  display: block;
  text-align: center;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.colors.primary};
`;

export const StyledLogOutButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSize.m};
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
    background-color: ${p => p.theme.colors.success};
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;

export const Icon = styled.span`
  margin-left: ${props => props.theme.spacing(2)};
`;
