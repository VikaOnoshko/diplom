import { Price } from '@components/price';
import { useAppNavigate } from '@router/hooks';

type Props = {
  order: Order;
};

export const OrderHistoryItem = ({ order }: Props) => {
  const totalPrice = (order.products || []).reduce((acc, cur) => {
    return acc + cur.item.price * cur.count;
  }, 0);

  const totalSale = (order.products || []).reduce((acc, cur) => {
    return (
      acc +
      (cur.item.sale ? (cur.item.sale / 100) * cur.item.price * cur.count : 0)
    );
  }, 0);

  const { goToMyOrder } = useAppNavigate();

  return (
    <tr className="order-history__tr">
      <td className="order-history__td">
        {order.recipient.date &&
          new Date(order.recipient.date).toLocaleDateString()}
      </td>
      <td className="order-history__td">
        <Price price={totalPrice - totalSale} />
      </td>
      <td className="order-history__td">
        <div
          className="order-history__details"
          onClick={() => {
            goToMyOrder(String(order.id));
          }}
        >
          <span>Перейти к заказу</span>
        </div>
      </td>
    </tr>
  );
};
