import { Label, Form, LoginInput, LoginButton } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <LoginInput type="email" name="email" />
      </Label>
      <Label>
        Password
        <LoginInput type="password" name="password" />
      </Label>
      <LoginButton type="submit">Log In</LoginButton>
    </Form>
  );
};
