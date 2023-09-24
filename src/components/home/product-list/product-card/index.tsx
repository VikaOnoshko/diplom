import './index.less';
import { Button } from '@ui/shared/button';
import { Rating } from '@mui/material';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { addProduct, changeProductCount } from '@redux/reducers/cart.reducer';
import { Price } from '@components/price';

type ProductCardProps = {
  product: Product;
  count: number;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, sale, rating, top, favorite, img } = product;

  const dispatch = useAppDispath();

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  const actualPrice = sale ? +((price * (100 - sale)) / 100).toFixed(2) : price;

  const products = useAppSelector((state) => state.cart.products);

  const hasInCart = products.some((item) => item.item.id === product.id);

  const handlechangeProductCount = (newCount: number) => {
    dispatch(changeProductCount({ item: product, count: newCount }));
  };

  const countInCart =
    products.find((item) => item.item.id === product.id)?.count || 0;

  return (
    <div className="product-card" title={name}>
      <div className="product-card__header">
        {sale && (
          <div className="product-card__sale product-card__mark">
            <span>-{sale}%</span>
          </div>
        )}
        <div
          className="product-card__like product-card__mark"
          data-favorite={favorite}
        >
          <span className="icon-favorite"></span>
        </div>
        <div className="product-card__img">
          <img src={img} alt="prod" />
        </div>
        {top && (
          <div className="product-card__top product-card__mark">
            <span>TOP</span>
          </div>
        )}
      </div>
      <div className="product-card__body">
        <div className="product-card__description">
          <div className="product-card__rating">
            {/* FIXME: create in ui shared */}
            <Rating name="half-rating" defaultValue={rating} precision={0.5} />
          </div>
          <div className="product-card__properties">
            <div className="product-card__name">
              <span>{name}</span>
            </div>
            <div className="product-card__price">
              {sale && (
                <div className="product-card__old-price">
                  <Price price={price} />
                </div>
              )}
              <div className="product-card__actual-price">
                <Price price={actualPrice} />
              </div>
            </div>
          </div>
        </div>

        <div className="product-card__actions">
          {hasInCart && (
            <div className="product-card__count">
              <div
                className="product-card__arrow product-card__arrow_left"
                onClick={() => handlechangeProductCount(countInCart - 1)}
              ></div>
              <div className="product-card__number">{countInCart}</div>
              <div
                className="product-card__arrow product-card__arrow_right"
                onClick={() => handlechangeProductCount(countInCart + 1)}
              ></div>
            </div>
          )}

          {!hasInCart && <Button text="Заказать" onClick={handleClick} />}
          <div className="product-card__fast-order">
            <span>Быстрый заказ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
