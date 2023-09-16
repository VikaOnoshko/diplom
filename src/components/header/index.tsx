import './index.less';
import { Badge } from '@ui/shared/badge';
import { IconButton } from '@ui/shared/icon-button';
import logo from '@assets/images/logo.png';
import { Auth } from '@components/auth';
import { useState } from 'react';

export const Header = () => {
  const [isOpenAuth, setIsOpenAuth] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <div className="header__menu">
              <div className="header__logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="header__navigation">
                <span>Каталог товаров</span>
                <span>Форум</span>
                <span>Отзывы</span>
                <span>Акции</span>
                <span>Новости</span>
              </div>
              <div className="header__icons">
                <IconButton onClick={() => setIsOpenAuth(true)}>
                  <span className="icon-person"></span>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={4}>
                    <span className="icon-cart"></span>
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={4}>
                    <span className="icon-favorite"></span>
                  </Badge>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpenAuth && <Auth close={() => setIsOpenAuth(false)} />}
    </>
  );
};
