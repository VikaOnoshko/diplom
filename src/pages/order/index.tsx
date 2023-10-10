import { OrderPrice } from '@components/order/order-price';
import { OrderDetails } from '@components/order/order-details';
import './index.less';
import { useAppSelector } from '@redux/store/store';

export const OrderPage = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <div className="order">
      <div className="order__container">
        <div className="order__wrapper">
          <div className="order__header">
            <h1>Оформление заказа</h1>
          </div>
          <div className="order__main">
            {products.length ? (
              <>
                <OrderDetails />
                <OrderPrice />
              </>
            ) : (
              <h2 className="order__empty">Нет товаров</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
