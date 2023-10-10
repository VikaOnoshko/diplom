import { Price } from '@components/price';
import { OrderService } from '@services/order.service';
import './index.less';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@redux/store/store';

export const MyOrder = () => {
  const { id } = useParams<{ id: string }>();
  const { vase, photo, postCard, delivery } = useAppSelector(
    (state) => state.cart,
  );
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    OrderService.getOne(Number(id)).then((data) => setOrder(data));
  }, []);

  const totalPrice =
    order?.products?.reduce((acc, cur) => {
      return acc + cur.item.price * cur.count;
    }, 0) || 0;

  const totalSale =
    order?.products?.reduce((acc, cur) => {
      return (
        acc +
        (cur.item.sale ? (cur.item.sale / 100) * cur.item.price * cur.count : 0)
      );
    }, 0) || 0;

  const finallyPrice =
    totalPrice -
    totalSale +
    (vase || 0) +
    (photo || 0) +
    (postCard || 0) +
    (delivery || 0);

  return (
    <div>
      <div className="my-order__container">
        <div className="my-order__wrapper">
          <div className="my-order__content">
            <div className="my-order__items">
              <div className="my-order__sender">
                <div className="my-order__item">
                  <div className="my-order__title">
                    <h3>Отправитель:</h3>
                  </div>
                  <div className="my-order__text">
                    <b>Имя: </b>
                    <span>{order && order.sender.name}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Почта:</b> <span>{order && order.sender.email}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Телефон: </b>
                    <span>{order && order.sender.telephone}</span>
                  </div>
                </div>
              </div>
              <div className="my-order__recipient">
                <div className="my-order__item">
                  <div className="my-order__title">
                    <h3>Получатель: </h3>
                  </div>
                  <div className="my-order__text">
                    <b>Имя: </b>
                    <span> {order && order.recipient.name}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Регион: </b>
                    <span> {order && order.recipient.region}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Адрес: </b>
                    <span> {order && order.recipient.adress}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Дата доставки: </b>
                    <span>{order && <></>}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Вреям доставки: </b>
                    <span> {order && order.recipient.time}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Телефон: </b>
                    <span> {order && order.recipient.telephone}</span>
                  </div>
                </div>
              </div>
              <div className="my-order__delivery">
                <div className="my-order__item">
                  <div className="my-order__title">
                    <h3>Детали: </h3>
                  </div>
                  <div className="my-order__text">
                    <b>Сюрприз: </b>
                    <span>
                      {order && order.delivery.isSurprice
                        ? 'нужен'
                        : 'не нужен'}
                    </span>
                  </div>
                  <div className="my-order__text">
                    <b>Фотоотчет: </b>
                    <span>
                      {order && order.delivery.isPhoto ? 'да' : 'нет'}
                    </span>
                  </div>
                  <div className="my-order__text">
                    <b>Ваза: </b>
                    <span>{order && order.delivery.isVase ? 'да' : 'нет'}</span>
                  </div>
                  <div className="my-order__text">
                    <b>Напомнить о событии: </b>
                    <span>
                      {order && order.delivery.isNotify ? 'нужно' : 'не нужно'}
                    </span>
                  </div>
                  <div className="my-order__text">
                    <b>Визитка: </b>
                    <span>
                      {order && order.delivery.isPostcard ? 'да' : 'нет'}
                    </span>
                  </div>
                  <div className="my-order__text">
                    <b>Полномасштабная открытка: </b>
                    <span>
                      {order && order.delivery.isPayPostcard ? 'да' : 'нет'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-order__product">
                <div className="my-order__item">
                  <div className="my-order__title">
                    <h3>Состав заказа: </h3>
                  </div>
                  <div className="my-order__text">
                    {order &&
                      order.products?.map(({ item: product, count }) => {
                        const { name, price, sale } = product;

                        return (
                          <div className="my-product__item">
                            <div className="my-product__name">
                              <b>Название: </b>
                              <span>{name}</span>
                            </div>

                            <div className="my-product__price">
                              <b>Цена: </b>
                              <Price price={price} />
                            </div>
                            <div className="my_product__count">
                              <b>Количество: </b>
                              <span>{count}</span>
                            </div>
                            <div className="my_product__allprice">
                              <b>Итого за товар: </b>
                              <Price
                                price={
                                  (sale
                                    ? +((price * (100 - sale)) / 100)
                                    : price) * count
                                }
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-order__title">
              <h3>Общая сумма заказа: </h3>
              <span>
                <Price price={finallyPrice} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
