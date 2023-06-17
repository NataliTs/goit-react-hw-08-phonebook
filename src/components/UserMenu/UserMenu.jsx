import { LogoutBtn, UsMenu, UserName } from './UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UsMenu>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </UsMenu>
  );
};
