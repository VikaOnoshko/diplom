import './index.less';
import { Sort } from '@components/catalog/sort';
import { Category } from '@components/catalog/category';
import { CatalogResult } from '@components/catalog/result';
import { Breadcrumbs } from '@ui/shared/breadcrumb';
import { PageNames } from '@router/routes';

export const CatalogPage = () => {
  return (
    <div className="catalog">
      <div className="catalog__container">
        <div className="catalog__wrapper">
          <Breadcrumbs
            crumbs={[
              { title: 'Главная', link: PageNames.HOME },
              { title: 'Каталог' },
            ]}
          />
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
