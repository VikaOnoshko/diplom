import { Price } from '@components/price';
import './index.less';
import {
  changeProductCount,
  removeProduct,
} from '@redux/reducers/cart.reducer';
import { useAppDispath } from '@redux/store/store';

type Props = {
  product: Product;
  count: number;
};

export const CartItem = ({ product, count }: Props) => {
  const { img, name, price, sale } = product;

  const dispatch = useAppDispath();

  const handlechangeProductCount = (newCount: number) => {
    dispatch(changeProductCount({ item: product, count: newCount }));
  };

  const actualPrice = sale ? +((price * (100 - sale)) / 100).toFixed(2) : price;

  const totalCount = actualPrice * count;

  const handleDeleteProduct = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <div className="cart-item__img">
          <img src={img} alt="prod" />
        </div>
        <div className="cart-item__characteristic">
          <div className="cart-item__name">
            <span>{name}</span>
          </div>

          <div className="cart-item__prices">
            <div className="cart-item__number">
              <div className="cart-item__price">
                <Price price={actualPrice} />
              </div>

              <div className="cart-item__sale">
                <Price price={price} />
              </div>
            </div>
          </div>

          <div className="cart-item__nav">
            <div className="cart-item__count">
              <div
                className="cart-item__arrow cart-item__arrow_left"
                onClick={() => handlechangeProductCount(count - 1)}
              ></div>
              <div className="cart-item__number">{count}</div>
              <div
                className="cart-item__arrow cart-item__arrow_right"
                onClick={() => handlechangeProductCount(count + 1)}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-item__added">
        <div className="cart-item__total-count">
          <div className="cart-item__result-count">
            <Price price={totalCount} />
          </div>
        </div>

        <div className="cart-item__icons">
          <div className="cart-item__icon">
            <span className="icon-favorite"></span>
          </div>
          <div
            className="cart-item__icon"
            onClick={() => handleDeleteProduct()}
          >
            <span className="icon-delete"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
