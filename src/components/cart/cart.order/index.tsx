import { Button } from '@ui/shared/button';
import './index.less';
import { useAppSelector } from '@redux/store/store';
import { Price } from '@components/price';

export const CartOrder = () => {
  const products = useAppSelector((state) => state.cart.products);

  const totalPrice = products.reduce((acc, cur) => {
    return acc + cur.item.price * cur.count;
  }, 0);

  const totalSale = products.reduce((acc, cur) => {
    return acc + (cur.item.sale ? (cur.item.sale / 100) * cur.item.price : 0);
  }, 0);

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
                  <Price price={totalPrice} />
                </div>
              </div>
              <div className="order__item">
                <div className="order__name">
                  <span>Скидка</span>
                </div>
                <div className="order__price">
                  <Price price={totalSale} />
                </div>
              </div>
            </div>
            <div className="order__result">
              <div className="result__title">
                <div className="span">Всего</div>
              </div>
              <div className="result__summ">
                <Price price={totalPrice - totalSale} />
              </div>
            </div>
          </div>

          <Button className="button" text="Оформить заказ" />
        </div>
      </div>
    </div>
  );
};
