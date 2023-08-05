import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Hello, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
