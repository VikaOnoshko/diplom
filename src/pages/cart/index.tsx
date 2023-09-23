import { useAppNavigate } from '@router/hooks';
import './index.less';
import { CartOrder } from '@components/cart/cart.order';
import { CartList } from '@components/cart/cart-list';

export const CartPage = () => {
  const { goToCatalog } = useAppNavigate();

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__wrapper">
          <div className="cart__header">
            <h1>Корзина</h1>
          </div>
          <div className="cart__main">
            <div className="cart__title">
              <div className="cart__options">
                <span>Название</span>
                <span>Цена за шт.</span>
                <span>Кол-во</span>
                <span>Итог</span>
              </div>
              <div className="cart__nav">
                <span onClick={goToCatalog}>Продолжить покупки</span>
                <div className="cart__arrow cart__arrow_right">
                  <div className="arrow__top"></div>
                  <div className="arrow__bottom"></div>
                </div>
              </div>
            </div>
            <div className="cart__description">
              <CartList />
              <CartOrder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
