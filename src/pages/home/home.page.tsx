import logo from '@assets/images/logo.png';

import { IconButton } from '@ui/shared/icon-button';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './index.less';

import { HomeBanner } from '@components/home/banner';
import { HomeForClient } from '@components/home/for-client';
import { Stack } from '@mui/material';

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
              <Stack className="header__actions" spacing={4} direction="row">
                <IconButton>
                  <PersonIcon />
                </IconButton>
                <IconButton>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={4} color="secondary">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <HomeBanner />
        <HomeForClient />
      </div>
      <div className="footer"></div>
    </div>
  );
};
