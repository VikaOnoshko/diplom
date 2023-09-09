import './index.less';
import logo from '@assets/images/logo.png';

import { IconButton } from '@ui/shared/icon-button';
import { Badge } from '@ui/shared/badge';

import { HomeBanner } from '@components/home/banner';
import { HomeForClient } from '@components/home/for-client';
import { ProductList } from '@components/home/product-list';

export const HomePage = () => {
  return (
    <div className="home">
      <div className="header">
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
              <IconButton>
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
      <div className="main">
        <HomeBanner />
        <HomeForClient />
        <ProductList />
      </div>
      <div className="footer"></div>
    </div>
  );
};
