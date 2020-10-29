import * as React from 'react';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import useLocalStorage from './useLocalStorage';

const MyLogoutButton = forwardRef((props, ref) => {
  const logout = useLogout();
  const [permissions] = useLocalStorage('permissions', '');
  const handleClick = () => {
    if (permissions === 'student') {
      localStorage.removeItem('edit');
      localStorage.removeItem('change');
      localStorage.removeItem('name');
      localStorage.removeItem('details');
    }
    logout();
  };
  // eslint-disable-next-line
  const [change, setChange] = useLocalStorage('change', false);
  // eslint-disable-next-line
  const [edit, setEdit] = useLocalStorage('edit', false);
  return (
    <div>
      {permissions === 'student' && (
        <MenuItem
          ref={ref}
          onClick={e => {
            setEdit(true);
            setChange(false);
          }}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Edit My Info
          </Link>
        </MenuItem>
      )}
      {permissions === 'student' && (
        <MenuItem
          ref={ref}
          onClick={e => {
            setChange(true);
            setEdit(false);
          }}>
          Change Password
        </MenuItem>
      )}
      <MenuItem onClick={handleClick} ref={ref}>
        <ExitIcon /> Logout
      </MenuItem>
    </div>
  );
});

export default MyLogoutButton;
