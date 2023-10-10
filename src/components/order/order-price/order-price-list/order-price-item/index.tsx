import { Price } from '@components/price';
import './index.less';

type Props = {
  product: Product;
  count: number;
};

export const OrderPriceItem = ({ product, count }: Props) => {
  const { name, price, sale } = product;

  const actualPrice = sale ? +((price * (100 - sale)) / 100).toFixed(2) : price;

  return (
    <div className="order-price__item">
      <div className="order-price__name">
        <span>{name}</span>
      </div>
      <div className="order-price__count">
        <span>{count}</span>
      </div>
      <div className="order-price__price">
        <Price price={actualPrice} />
      </div>
    </div>
  );
};
