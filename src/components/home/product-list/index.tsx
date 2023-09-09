import './index.less';
import { ProductCard } from './product-card';

export const ProductList = () => {
  return (
    <section className="product-list">
      <div className="product-list__container">
        <div className="product-list__wrapper">
          <div className="product-list__header">
            <h2 className="product-list__title">Акции</h2>
            <div className="product-list__pages">
              <div className="product-list__arrow product-list__left"></div>
              <div className="product-list__arrow product-list__right"></div>
            </div>
          </div>
          <div className="product-list__body">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};
