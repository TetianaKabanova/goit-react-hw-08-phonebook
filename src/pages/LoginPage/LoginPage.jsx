import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import { loginUserThunk } from 'redux/operations';
import {
  Form,
  Icon,
  Input,
  Label,
  LoginPageContainer,
  SubmitButton,
  Title,
} from './LoginPage.styled';
import { LockTwoTone, LoginOutlined, MailTwoTone } from '@ant-design/icons';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(loginUserThunk({ email, password }));
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <LoginPageContainer>
      <Title>Login Into Your Account</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <p>
            Email <MailTwoTone />
          </p>
          <Input name="userEmail" type="email" required minLength={2} />
        </Label>
        <br />
        <Label>
          <p>
            Password <LockTwoTone />
          </p>
          <Input name="userPassword" type="password" required minLength={7} />
        </Label>
        <br />
        <SubmitButton type="submit">
          Sign in
          <Icon>
            <LoginOutlined />
          </Icon>
        </SubmitButton>
      </Form>
    </LoginPageContainer>
  );
};

export default LoginPage;
