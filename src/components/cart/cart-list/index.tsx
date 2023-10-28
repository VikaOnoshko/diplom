import { useAppDispath, useAppSelector } from '@redux/store/store';
import './index.less';
import { CartItem } from './cart-item';
import { Button } from '@ui/shared/button';
import { clear } from '@redux/reducers/cart.reducer';
import { useState } from 'react';
import { Modal } from '@ui/shared/modal';

export const CartList = () => {
  const dispatch = useAppDispath();

  const clearCart = () => {
    dispatch(clear());
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

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

      {products.length !== 0 && (
        <div className="cart__action">
          <Button
            text={'Очистить корзину'}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      )}
      {products.length === 0 && (
        <div className="cart__ampty-message">
          <span>Корзина пуста</span>
        </div>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="cart__ampty-text">
          <span>Вы точно хотите очистить корзину?</span>
        </div>

        <Button text="Очистить корзину" onClick={clearCart} />
        <span className="cart__ampty-nav" onClick={() => setIsOpen(false)}>
          Отмена
        </span>
      </Modal>
    </div>
  );
};
