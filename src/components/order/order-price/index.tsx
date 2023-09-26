import './index.less';

import { Button } from '@ui/shared/button';
import { useAppSelector } from '@redux/store/store';
import { Price } from '@components/price';

export const OrderPrice = () => {
  const products = useAppSelector((state) => state.cart.products);

  const totalPrice = products.reduce((acc, cur) => {
    return acc + cur.item.price * cur.count;
  }, 0);

  const totalSale = products.reduce((acc, cur) => {
    return acc + (cur.item.sale ? (cur.item.sale / 100) * cur.item.price : 0);
  }, 0);

  return (
    <div className="order-price">
      <div className="order-price__container">
        <div className="order-price__wrapper">
          <div className="order-price__header">
            <h2>Ваш заказ</h2>
          </div>
          <div className="order-price__main">
            <div className="order-price__body">
              <div className="order-price__item">
                <div className="order-price__name">{}</div>
                <div className="order-price__count">{}</div>
                <div className="order-price__price">{}</div>
              </div>
            </div>
            <div className="order-price__result">
              <div className="result__title">
                <div className="span">Всего</div>
              </div>
              <div className="result__summ">
                <Price price={totalPrice - totalSale} />
              </div>
            </div>
          </div>

          <Button
            className="button"
            text="Оформить заказ"
            data-disabled={products.length === 0}
          />
        </div>
      </div>
    </div>
  );
};
