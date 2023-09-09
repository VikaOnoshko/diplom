import './index.less';
import { ProductCard } from './product-card';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ProductList = () => {
  return (
    <section className="product-list">
      <div className="product-list__container">
        <div className="product-list__wrapper">
          <div className="product-list__header">
            <h2 className="product-list__title">Акции</h2>
            <div className="product-list__pages">
              <ArrowBackIosNewIcon />
              <ArrowForwardIosIcon />
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
