import { useAppNavigate } from '@router/hooks';
import './index.less';
import { CartOrder } from '@components/cart/cart-order';
import { CartList } from '@components/cart/cart-list';
import { Breadcrumbs } from '@ui/shared/breadcrumb';
import { PageNames } from '@router/routes';

export const CartPage = () => {
  const { goToCatalog } = useAppNavigate();

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__wrapper">
          <Breadcrumbs
            crumbs={[
              { title: 'Главная', link: PageNames.HOME },
              { title: 'Корзина' },
            ]}
          />
          <div className="cart__header">
            <h1>Корзина</h1>
          </div>
          <div className="cart__main">
            <div className="cart__title">
              <div className="cart__options">
                <span className="cart__name">Название</span>
                <span className="cart__price">Цена за шт.</span>
                <span className="cart__count"> Кол-во</span>
                <span className="cart__finaly">Итог</span>
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
