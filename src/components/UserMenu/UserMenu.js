import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userBox}>
      <p className={css.paragraph}>Hello, {user.name}</p>
      <button className={css.button} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
