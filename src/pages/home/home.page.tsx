import logo from '@assets/images/logo.png';

import komp from '@assets/images/presents/komp.png';

import { IconButton } from '@ui/shared/icon-button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './index.less';

export const HomePage = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="header__container">
          <div className="header__wrapper">
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
            <div className="header__actions">
              <IconButton>
                <PersonIcon />
              </IconButton>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="banner">
          <div className="banner__container">
            <div className="banner__wrapper">
              <div className="banner__sale">
                <div className="banner__card">
                  <div className="banner__img">
                    <img src={komp} alt="komp" />
                  </div>
                  <span className="banner__text banner__text_left">Розы</span>
                </div>
                <div className="banner__card">
                  <div className="banner__img">
                    <img src={komp} alt="komp" />
                  </div>
                  <span className="banner__text banner__text_left">Розы</span>
                </div>
                <div className="banner__card">
                  <div className="banner__img">
                    <img src={komp} alt="komp" />
                  </div>
                  <span className="banner__text banner__text_left">Розы</span>
                </div>
                <div className="banner__card">
                  <div className="banner__img">
                    <img src={komp} alt="komp" />
                  </div>
                  <span className="banner__text banner__text_left">Розы</span>
                </div>
                <div className="banner__card">
                  <div className="banner__img">
                    <img src={komp} alt="komp" />
                  </div>
                  <span className="banner__text banner__text_left">Розы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};
