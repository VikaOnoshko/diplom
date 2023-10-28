import { Price } from '@components/price';
import './index.less';

type Props = {
  name: string;
  price: number;
};

export const OrderPriceAdded = ({ name, price }: Props) => {
  return (
    <div className="order-added__item">
      <div className="order-added__name">
        <span>{name}</span>
      </div>
      <div className="order-added__price">
        <Price price={price} />
      </div>
    </div>
  );
};
