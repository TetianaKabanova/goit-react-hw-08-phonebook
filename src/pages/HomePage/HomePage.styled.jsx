import styled from '@emotion/styled';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[4]}px;
`;

export const Title = styled.h1`
  display: block;
  text-align: center;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.colors.primary};
`;

export const HomeIcon = styled.span`
  margin-left: ${props => props.theme.spacing(2)};
`;
