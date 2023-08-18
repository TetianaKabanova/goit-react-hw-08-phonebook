import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import { registerUserThunk } from 'redux/operations';
import {
  Form,
  Icon,
  Input,
  Label,
  RegistrePageContainer,
  SubmitButton,
  Title,
} from './RegistrePage.styled';
import {
  CheckCircleOutlined,
  LockTwoTone,
  MailTwoTone,
  UserOutlined,
} from '@ant-design/icons';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(registerUserThunk({ name, email, password }));
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <RegistrePageContainer>
      <Title>Register Your Account</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <p>
            Name <UserOutlined />
          </p>
          <Input name="userName" type="text" required minLength={2} />
        </Label>
        <br />
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
          Sign up
          <Icon>
            <CheckCircleOutlined />
          </Icon>
        </SubmitButton>
      </Form>
    </RegistrePageContainer>
  );
};

export default RegisterPage;
