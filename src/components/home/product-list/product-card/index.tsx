import './index.less';
import { Button } from '@ui/shared/button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Rating, Skeleton } from '@mui/material';

import { useAppDispath, useAppSelector } from '@redux/store/store';
import {
  addProduct,
  changeProductCount,
  removeProduct,
} from '@redux/reducers/cart.reducer';
import { Price } from '@components/price';
import { useAppNavigate } from '@router/hooks';

type ProductCardProps = {
  loading?: boolean;
  product?: Product;
};

export const ProductCard = ({ product, loading }: ProductCardProps) => {
  const { name, price, sale, rating, top, favorite, img } = product || {};

  const dispatch = useAppDispath();
  const products = useAppSelector((state) => state.cart.products);

  const handleClick = () => {
    product && dispatch(addProduct(product));
  };

  const actualPrice =
    price && sale ? +((price * (100 - sale)) / 100).toFixed(2) : price;

  const hasInCart = products.some(({ item }) => item?.id === product?.id);

  const handlechangeProductCount = (newCount: number) => {
    product && dispatch(changeProductCount({ item: product, count: newCount }));
  };

  const countInCart =
    (product && products.find((item) => item.item.id === product.id)?.count) ||
    0;

  const handleDeleteProduct = () => {
    product && dispatch(removeProduct(product.id));
  };

  const { goToOrder } = useAppNavigate();

  return (
    <div className="product-card" title={name}>
      <div className="product-card__header">
        {sale && (
          <div className="product-card__sale product-card__mark">
            <span>-{sale}%</span>
          </div>
        )}

        {loading || (
          <div
            className="product-card__like product-card__mark"
            data-favorite={favorite}
          >
            <span className="icon-favorite"></span>
          </div>
        )}

        <div className="product-card__img">
          {loading ? (
            <Skeleton variant="rectangular" />
          ) : (
            <img src={img} alt="prod" />
          )}
        </div>
        {top && (
          <div className="product-card__top product-card__mark">
            <span>TOP</span>
          </div>
        )}
      </div>
      <div className="product-card__body">
        <div className="product-card__description">
          {loading ? (
            <Skeleton variant="rounded" />
          ) : (
            <div className="product-card__rating">
              <Rating
                name="half-rating"
                defaultValue={rating}
                precision={0.5}
                size="small"
                emptyIcon={
                  <StarBorderIcon
                    fontSize="inherit"
                    className={'product-card__empty-star'}
                  />
                }
              />
            </div>
          )}

          <div className="product-card__properties">
            {loading ? (
              <Skeleton variant="text" />
            ) : (
              <div className="product-card__name">
                <span>{name}</span>
              </div>
            )}

            <div className="product-card__price">
              {loading ? (
                <Skeleton variant="text" />
              ) : (
                <>
                  {sale && (
                    <div className="product-card__old-price">
                      <Price price={price} />
                    </div>
                  )}

                  <div className="product-card__actual-price">
                    <Price price={actualPrice} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="product-card__actions">
          {hasInCart && (
            <div className="product-card__nav">
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
              <div
                className="product-card__icon"
                onClick={() => handleDeleteProduct()}
              >
                <span className="icon-delete"></span>
              </div>
            </div>
          )}

          <div className="product-card__order">
            {loading ? (
              <Skeleton variant="rounded" height={35} />
            ) : (
              <>
                {!hasInCart && <Button text="Заказать" onClick={handleClick} />}
              </>
            )}
          </div>

          <div className="product-card__fast-order">
            {loading ? (
              <Skeleton variant="text" />
            ) : (
              <span onClick={goToOrder}>Быстрый заказ</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
