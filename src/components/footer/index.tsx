import logo from '@assets/images/logo.png';
import card from '@assets/images/footer/lp.png';
import mc from '@assets/images/footer/ma.png';
import vs from '@assets/images/footer/visa.png';
import ve from '@assets/images/footer/visan.png';
import mk from '@assets/images/footer/mc.png';
import './index.less';
import { useAppNavigate } from '@router/hooks';

export const Footer = () => {
  const { goToHome } = useAppNavigate();

  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__contacts">
            <a href="#header">
              <div className="footer__logo" onClick={goToHome}>
                <img src={logo} alt="logo" />
              </div>
            </a>
            <div className="footer__description">
              <div className="footer__information">
                <div className="footer__title">
                  <h5>ИНФОРМАЦИЯ</h5>
                </div>
                <div className="footer__categories">
                  <div className="footer__about">
                    <span>О НАС</span>
                  </div>
                  <div className="footer__about">
                    <span>ДОСТАВКА И ОПЛАТА</span>
                  </div>
                  <div className="footer__about">
                    <span>ПОЛИТИКА</span>
                  </div>
                  <div className="footer__about">
                    <span>КОНФИДЕНЦИАЛЬНОСТИ</span>
                  </div>
                </div>
              </div>
              <div className="footer__information">
                <div className="footer__title">
                  <h5>СЛУЖБА ПОДДЕРЖКИ</h5>
                </div>
                <div className="footer__categories">
                  <div className="footer__about">
                    <span>КАРТА САЙТА</span>
                  </div>
                  <div className="footer__about">
                    <span>ВОЗВРАТ ТОВАРА</span>
                  </div>
                  <div className="footer__about">
                    <span>СВЯЗАТЬСЯ С НАМИ</span>
                  </div>
                  <div className="footer__about">
                    <span>ДЛЯ СОТРУДНИЧЕСТВА</span>
                  </div>
                </div>
              </div>
              <div className="footer__information">
                <div className="footer__title">
                  <h5>ЛИЧНЫЙ КАБИНЕТ</h5>
                </div>
                <div className="footer__categories">
                  <div className="footer__about">
                    <span>ЗАКЛАДКИ</span>
                  </div>
                  <div className="footer__about">
                    <span>ИСТОРИЯ ЗАКАЗОВ</span>
                  </div>
                  <div className="footer__about">
                    <span>ЛИЧНЫЙ КАБИНЕТ</span>
                  </div>
                  <div className="footer__about">
                    <span>СПИСОК НОВОСТЕЙ</span>
                  </div>
                </div>
              </div>
              <div className="footer__information">
                <div className="footer__title">
                  <h5>ДОПОЛНИТЕЛЬНО</h5>
                </div>
                <div className="footer__categories">
                  <div className="footer__about">
                    <span>ПОДАРКИ</span>
                  </div>
                  <div className="footer__about">
                    <span>СЕРТИФИКАТЫ</span>
                  </div>
                  <div className="footer__about">
                    <span>АКЦИИ</span>
                  </div>
                  <div className="footer__about">
                    <span>ЦВЕТЫ В ОФИС</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__line"></div>
          <div className="footer__copyright">
            <div className="footer__text">
              <span>Copyright © 2023. Все права защищены</span>
            </div>
            <div className="footer__pay">
              <div className="footer__subtitle">
                <span>Способы оплаты:</span>
              </div>
              <div className="footer__card">
                <a href="https://www.liqpay.ua/ru" className="footer__img">
                  <img src={card} alt="card" />
                </a>
                <a
                  href="https://www.mastercard.by/ru-by.html"
                  className="footer__img"
                >
                  <img src={mk} alt="card" />
                </a>
                <a
                  href="https://quickpay.net/payment-methods/maestro/"
                  className="footer__img"
                >
                  <img src={mc} alt="card" />
                </a>
                <a href="https://by.visa.com/" className="footer__img">
                  <img src={vs} alt="card" />
                </a>
                <a href="https://by.visa.com/ " className="footer__img">
                  <img src={ve} alt="card" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
