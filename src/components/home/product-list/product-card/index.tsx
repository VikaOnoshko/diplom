import './index.less';
import { Button } from '@ui/shared/button';
import { Rating } from '@mui/material';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, sale, rating, top, favorite, img } = product;

  const actualPrice = sale ? +((price * (100 - sale)) / 100).toFixed(2) : price;

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
                  <span>{price} BYN</span>
                </div>
              )}
              <div className="product-card__actual-price">
                <span>{actualPrice} BYN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card__actions">
          <Button text="Заказать" />
          <div className="product-card__fast-order">
            <span>Быстрый заказ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
