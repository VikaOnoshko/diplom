import logo from '@assets/images/logo.png';
import flowers from '@assets/images/presents/flowers.png';
import present from '@assets/images/presents/present.png';
import rose from '@assets/images/presents/rose.png';
import sweets from '@assets/images/presents/sweets.png';
import { IconButton } from '@ui/shared/icon-button';

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
                <span>person</span>
              </IconButton>
              <IconButton>
                <span>Cart</span>
              </IconButton>
              <IconButton>
                <span>Favorite</span>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="banner">
          <div className="banner__sale">
            <div className="banner__card">
              <div className="banner__img">
                <img src={flowers} alt="flowers" />
              </div>
              <span>Скидки -10% на все букеты по предзаказу на 8 марта</span>
            </div>
          </div>
          <div className="banner__catalog">
            <div className="banner__card">
              <div className="banner__img">
                <img src={rose} alt="rose" />
              </div>
              <span>Розы</span>
            </div>
            <div className="banner__card">
              <div className="banner__img">
                <img src={present} alt="present" />
              </div>
              <span>Подарки</span>
            </div>
            <div className="banner__card">
              <div className="banner__background"></div>
              <div className="banner__img">
                <img src={sweets} alt="sweets" />
              </div>
              <span>Подарочные корзины</span>
            </div>
            <div className="banner__card">
              <div className="banner__img">
                <img src={sweets} alt="sweets" />
              </div>
              <span>Цветы в коробке</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};
