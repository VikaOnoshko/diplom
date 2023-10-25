import { useEffect, useRef } from 'react';
import './index.less';
import { Confettiful } from '@utils/confettiful';
import { useAppNavigate } from '@router/hooks';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@ui/shared/breadcrumb';
import { PageNames } from '@router/routes';

export const OrderCreated = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      new Confettiful(ref.current);
    }
  });

  const { goToMyOrder } = useAppNavigate();
  const params = useParams<{ id: string }>();

  return (
    <div className="order-created">
      <div className="order-created__container">
        <div className="order-created__wrapper">
          <div className="confetti" ref={ref}></div>
          <Breadcrumbs
            crumbs={[
              { title: 'Главная', link: PageNames.HOME },
              { title: 'История заказов', link: PageNames.ORDER_HISTORY },
              { title: 'Статус заказа' },
            ]}
          />
          <div className="order-created__header">
            <h1>Статус заказа</h1>
          </div>
          <div className="order-created__main">
            <h2>Ваш заказ успешно оформлен!</h2>
            <div className="order-created__description">
              <span
                onClick={() => {
                  goToMyOrder(params.id as string);
                }}
              >
                Перейти к деталям заказа
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
