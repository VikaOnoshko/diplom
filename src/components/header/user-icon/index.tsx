import { useState } from 'react';
import { logout } from '@redux/reducers/userReducer';
import { useAppDispath } from '@redux/store/store';
import { Button } from '@ui/shared/button';
import { IconButton } from '@ui/shared/icon-button';
import './index.less';

export const UserIcon = () => {
  const [isOpenUser, setIsOpenUser] = useState(false);

  const dispatch = useAppDispath();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="user">
      <IconButton
        onClick={() => {
          setIsOpenUser(!isOpenUser);
        }}
      >
        <span className="icon-person"></span>
        <div className="triangle" data-open={isOpenUser}></div>
      </IconButton>

      {isOpenUser && (
        <div
          className="user-list"
          onClick={() => {
            isOpenUser;
          }}
        >
          <div className="user__profile">
            <div className="user__img"></div>
            <Button
              text="Выйти"
              onClick={() => {
                handleLogout();
              }}
            />
          </div>
          <div className="user__line"></div>
          <div className="user__options">
            <span>Мои заказы</span>
          </div>
        </div>
      )}
    </div>
  );
};
