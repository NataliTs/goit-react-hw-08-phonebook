import { useDispatch } from 'react-redux';
import { Label, Form } from './RegisterForm.styled';
import { LoginInput, LoginButton } from '../LoginForm/LoginForm.styled';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <LoginInput type="text" name="name" />
      </Label>
      <Label>
        Email
        <LoginInput type="email" name="email" />
      </Label>
      <Label>
        Password
        <LoginInput type="password" name="password" />
      </Label>
      <LoginButton type="submit">Register</LoginButton>
    </Form>
  );
};
