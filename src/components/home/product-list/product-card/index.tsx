import './index.less';
import fl from '@assets/images/card/img1.png';
import { Rating } from '@mui/material';

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__header">
        <div className="product-card__sales product-card__mark">
          <div className="product-card__border">
            <div className="product-card__number">
              <span>-19%</span>
            </div>
          </div>
        </div>
        <div className="product-card__like product-card__mark">
          <span className="icon-favorite"></span>
        </div>
        <div className="product-card__img">
          <img src={fl} alt="prod" />
        </div>
        <div className="product-card__top product-card__mark">
          <div className="product-card__top_circle">
            <span>TOP</span>
          </div>
        </div>
      </div>
      <div className="product-card__body">
        <div className="product-card__description">
          <div className="product-card__rating">
            {/* FIXME: create in ui shared */}
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="product-card__properties">
            <div className="product-card__name">
              <span>101 красная роза</span>
            </div>
            <div className="product-card__price">
              <div className="product-card__old-price">
                <span>150 BYN</span>
              </div>
              <div className="product-card__actual-price">
                <span>130 BYN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-card__button">
          <button>Заказать</button>
        </div>
        <div className="product-card__action">
          <span>Быстрый заказ</span>
        </div>
      </div>
    </div>
  );
};
