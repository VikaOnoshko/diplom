import { useAppDispath, useAppSelector } from '@redux/store/store';
import './index.less';
import { CartItem } from './cart-item';
import { Button } from '@ui/shared/button';
import { clear } from '@redux/reducers/cart.reducer';

export const CartList = () => {
  const dispatch = useAppDispath();

  const clearCart = () => {
    dispatch(clear());
  };

  const products = useAppSelector((state) => state.cart.products);

  return (
    <div className="cart__items">
      {products.map((product) => (
        <CartItem
          key={product.item.id}
          product={product.item}
          count={product.count}
        />
      ))}
      <div className="cart__action">
        <Button text={'Очистить корзину'} onClick={clearCart} />
      </div>
    </div>
  );
};
