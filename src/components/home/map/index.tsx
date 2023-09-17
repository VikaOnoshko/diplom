import './index.less';

import logo from '@assets/images/logo.png';
import GoogleMapReact from 'google-map-react';
import marker from '@assets/images/map/marker.png';
import { IconButton } from '@ui/shared/icon-button';

const AnyReactComponent: React.FC<{ lat: number; lng: number }> = () => (
  <img src={marker} alt="marker" />
);

const MAP_SETTING = {
  center: {
    lat: 53.8936212,
    lng: 27.5201239,
  },
  zoom: 14,
  options: { disableDefaultUI: true },
};

const POINT_SETTINGS = {
  lat: 53.8936212,
  lng: 27.5201239,
};

export const Map = () => {
  return (
    <section className="home-map">
      <div className="home-map__container">
        <div className="home-map__wrapper">
          <GoogleMapReact {...MAP_SETTING}>
            <AnyReactComponent {...POINT_SETTINGS} />
          </GoogleMapReact>
          <div className="map-color"></div>
          <div className="place">
            <div className="place__container">
              <div className="place__logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="place__main">
                <div className="place__contact">
                  <div className="place__name">
                    <span className="icon-viber"></span>
                    <div className="place__title">Tелефон:</div>
                  </div>
                  <div className="place__icon">
                    <a href="tel:+380441234567">+38 (063) 829 30 30</a>
                    <a href="tel:+380441234567">+38 (063) 829 30 30</a>
                  </div>

                  <div className="place__number"></div>
                </div>
                <div className="place__contact">
                  <div className="place__name">
                    <span className="icon-skype"></span>
                    <a className="place__title">Skype:</a>
                  </div>
                  <div className="place__text">
                    <a href="https://www.skype.com/ru/">Flowers-Ukraine</a>
                  </div>
                </div>
                <div className="place__contact">
                  <div className="place__name">
                    <span className="icon-mail"></span>
                    <div className="place__title">Почта:</div>
                  </div>
                  <div className="place__text">
                    <a href="https://mail.ru/">Flowers-Ukraine</a>
                  </div>
                </div>
                <div className="place__viber"></div>
                <div className="place__email"></div>
              </div>
              <div className="place__footer">
                <div className="place__social-media">
                  <IconButton>
                    <a
                      href="https://web.telegram.org/"
                      className="icon-telegramm"
                    ></a>
                  </IconButton>
                  <IconButton>
                    <a
                      href="https://www.instagram.com/"
                      className="icon-instagramm"
                    ></a>
                  </IconButton>
                  <IconButton>
                    <a
                      href="https://ru-ru.facebook.com/"
                      className="icon-facebook"
                    ></a>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
