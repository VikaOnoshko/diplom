import { Button } from '@ui/shared/button';
import './index.less';
import { useAppSelector } from '@redux/store/store';
import { Price } from '@components/price';
import { useAppNavigate } from '@router/hooks';

export const CartOrder = () => {
  const products = useAppSelector((state) => state.cart.products);

  const totalPrice = products.reduce((acc, cur) => {
    return acc + cur.item.price * cur.count;
  }, 0);

  const totalSale = products.reduce((acc, cur) => {
    return (
      acc +
      (cur.item.sale ? (cur.item.sale / 100) * cur.item.price * cur.count : 0)
    );
  }, 0);

  const { goToOrder } = useAppNavigate();

  return (
    <div className="cart-order">
      <div className="cart-order__container">
        <div className="cart-order__wrapper">
          <div className="cart-order__header">
            <h2>Ваш заказ</h2>
          </div>
          <div className="cart-order__main">
            <div className="cart-order__body">
              <div className="cart-order__item">
                <div className="cart-order__name">
                  <span>Товары</span>
                </div>
                <div className="cart-order__price">
                  <Price price={totalPrice} />
                </div>
              </div>
              <div className="cart-order__item">
                <div className="cart-order__name">
                  <span>Скидка</span>
                </div>
                <div className="cart-order__price">
                  <Price price={totalSale} />
                </div>
              </div>
            </div>
            <div className="cart-order__result">
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
            onClick={goToOrder}
          />
        </div>
      </div>
    </div>
  );
};
