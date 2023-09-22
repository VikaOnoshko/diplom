import './index.less';
import { Sort } from '@components/catalog/sort';
import { Category } from '@components/catalog/category';
import { CatalogResult } from '@components/catalog/result';

export const CatalogPage = () => {
  return (
    <div className="catalog">
      <div className="catalog__container">
        <div className="catalog__wrapper">
          <div className="catalog__header">
            <h1>Каталог товаров</h1>
          </div>
          <div className="catalog__main">
            <Category />
            <div className="catalog__product">
              <Sort />
              <CatalogResult />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
