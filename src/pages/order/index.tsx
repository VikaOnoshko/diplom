import { OrderPrice } from '@components/order/order-price';
import { OrderDetails } from '@components/order/order-details';
import './index.less';

export const OrderPage = () => {
  return (
    <div className="order">
      <div className="order__container">
        <div className="order__wrapper">
          <div className="order__header">
            <h1>Оформление заказа</h1>
          </div>
          <div className="order__main">
            <OrderDetails />
            <OrderPrice />
          </div>
        </div>
      </div>
    </div>
  );
};
