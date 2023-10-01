import './index.less';
import { Badge } from '@ui/shared/badge';
import { IconButton } from '@ui/shared/icon-button';
import logo from '@assets/images/logo.png';
import { Auth } from '@components/auth';
import { useEffect, useState } from 'react';
import { logout, selectUser } from '@redux/reducers/userReducer';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { useAppNavigate } from '@router/hooks';
import { Currency } from './currency';
import { BurgerMenu } from './burger';
import { Nav } from './burger/nav-bar';

export const Header = () => {
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const dispatch = useAppDispath();

  const { goToHome, goToCart } = useAppNavigate();

  const products = useAppSelector((state) => state.cart.products);
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setIsOpenAuth(false);
  }, [user]);

  return (
    <>
      <header className="header" id="header">
        <div className="header__container">
          <div className="header__wrapper">
            <div className="header__menu">
              <div className="header__logo" onClick={goToHome}>
                <img src={logo} alt="logo" />
              </div>
              <BurgerMenu />
              <Nav />
              <div className="header__icons">
                <Currency />
                {!user && (
                  <IconButton onClick={() => setIsOpenAuth(true)}>
                    <span className="icon-person"></span>
                  </IconButton>
                )}
                {!!user && (
                  <IconButton onClick={handleLogout}>
                    <span className="icon-sign_out"></span>
                  </IconButton>
                )}
                <IconButton onClick={goToCart}>
                  <Badge badgeContent={products.length}>
                    <span className="icon-cart"></span>
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={1}>
                    <span className="icon-favorite"></span>
                  </Badge>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {!user && isOpenAuth && <Auth close={() => setIsOpenAuth(false)} />}
    </>
  );
};
