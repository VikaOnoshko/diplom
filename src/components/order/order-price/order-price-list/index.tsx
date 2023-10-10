import { useAppSelector } from '@redux/store/store';
import { OrderPriceItem } from './order-price-item';

export const OrderPriceList = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <div className="order-price__items">
      {products.map((product) => (
        <OrderPriceItem
          key={product.item.id}
          product={product.item}
          count={product.count}
        />
      ))}
    </div>
  );
};
