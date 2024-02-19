import './index.less';

import { Button } from '@ui/shared/button';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { OrderPriceList } from './order-price-list';
import { OrderPriceAdded } from './order-price-list/order-price-added';
import { Price } from '@components/price';
import { createOrder } from '@redux/reducers/order.reducer';
import { useAppNavigate } from '@router/hooks';

export const OrderPrice = () => {
  const { value: order, isValid } = useAppSelector((state) => state.order);
  const { products, vase, photo, postCard, delivery } = useAppSelector(
    (state) => state.cart,
  );
  const userId = useAppSelector((state) => state.user.user?.uid || 'null');
  const dispatch = useAppDispath();
  const { goToOrderCreated } = useAppNavigate();

  const sendOrder = () => {
    dispatch(
      createOrder({ ...order, products, userId }, (newOrder) =>
        goToOrderCreated(String(newOrder._id)),
      ),
    );
  };

  const totalPrice = products.reduce((acc, cur) => {
    return acc + cur.item.price * cur.count;
  }, 0);

  const totalSale = products.reduce((acc, cur) => {
    return (
      acc +
      (cur.item.sale ? (cur.item.sale / 100) * cur.item.price * cur.count : 0)
    );
  }, 0);

  const finallyPrice =
    totalPrice -
    totalSale +
    (vase || 0) +
    (photo || 0) +
    (postCard || 0) +
    (delivery || 0);

  return (
    <div className="order-price">
      <div className="order-price__container">
        <div className="order-price__wrapper">
          <div className="order-price__header">
            <h2>Ваш заказ</h2>
          </div>
          <div className="order-price__main">
            <div className="order-price__body">
              <OrderPriceList />

              <div className="order-price__added">
                <OrderPriceAdded
                  name="Сумма заказа"
                  price={totalPrice - totalSale}
                ></OrderPriceAdded>

                {vase && (
                  <OrderPriceAdded name="Ваза" price={vase}></OrderPriceAdded>
                )}

                {photo && (
                  <OrderPriceAdded
                    name="Фотоотчет"
                    price={photo}
                  ></OrderPriceAdded>
                )}

                {postCard && (
                  <OrderPriceAdded
                    name="Полномасштабная открытка"
                    price={postCard}
                  ></OrderPriceAdded>
                )}

                {delivery && (
                  <OrderPriceAdded
                    name="Доставка"
                    price={delivery}
                  ></OrderPriceAdded>
                )}
              </div>
            </div>
          </div>

          <div className="order-price__finally">
            <div className="order-added__item">
              <div className="order-added__name">
                <span>Всего</span>
              </div>
              <div className="order-added__price">
                <Price price={finallyPrice} />
              </div>
            </div>
          </div>

          <Button
            className="button"
            text="Оформить заказ"
            data-disabled={!isValid}
            disabled={!isValid}
            onClick={sendOrder}
          />
        </div>
      </div>
    </div>
  );
};
