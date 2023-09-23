import { Button } from '@ui/shared/button';
import './index.less';

export const CartOrder = () => {
  return (
    <div className="order">
      <div className="order__container">
        <div className="order__wrapper">
          <div className="order__header">
            <h2>Ваш заказ</h2>
          </div>
          <div className="order__main">
            <div className="order__body">
              <div className="order__item">
                <div className="order__name">
                  <span>Товары</span>
                </div>
                <div className="order__price">
                  <span>5 5555</span>
                </div>
              </div>
              <div className="order__item">
                <div className="order__name">
                  <span>Скидка</span>
                </div>
                <div className="order__price">
                  <span>5555</span>
                </div>
              </div>
            </div>
            <div className="order__result">
              <div className="result__title">
                <div className="span">Всего</div>
              </div>
              <div className="result__summ">
                <span>5566</span>
              </div>
            </div>
          </div>
          <Button className="button" text="Оформить заказ" />
        </div>
      </div>
    </div>
  );
};
