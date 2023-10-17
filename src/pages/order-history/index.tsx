import { OrderService } from '@services/order.service';
import { useEffect, useState } from 'react';
import './index.less';
import { OrderHistoryItem } from './item-history-order';

export const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);

  useEffect(() => {
    OrderService.getList().then((data) => setOrderHistory(data));
  }, []);

  return (
    <div className="order-history">
      <div className="order-history__container">
        <div className="order-history__wrapper">
          <div className="order-history__header">
            <h1>История заказов</h1>
          </div>
          <div className="order-history__body">
            <table className="order-history__table">
              <thead className="order-history__table-header">
                <th className="order-history__th">Дата заказа</th>
                <th className="order-history__th">Стоимость заказа</th>
                <th className="order-history__th">Подробнее</th>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <OrderHistoryItem order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
