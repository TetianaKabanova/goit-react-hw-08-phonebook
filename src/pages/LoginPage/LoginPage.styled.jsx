import styled from '@emotion/styled';

export const LoginPageContainer = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const Input = styled.input`
  width: 320px;
  margin-bottom: ${p => p.theme.space[4]}px;
  outline: none;
  padding: 10px;
  font-size: ${p => p.theme.fontSize.s};
  color: ${props => props.theme.colors.secondary};
  text-shadow: ${p => p.theme.boxShadow.textShadow};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${p => p.theme.space[2]}px;

  :focus,
  :hover {
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;

export const SubmitButton = styled.button`
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
