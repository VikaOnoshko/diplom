import './index.less';
import { Sort } from '@components/catalog/sort';
import { Category } from '@components/catalog/category';
import { CatalogResult } from '@components/catalog/result';
import { Breadcrumbs } from '@ui/shared/breadcrumb';
import { PageNames } from '@router/routes';
import { useState } from 'react';
import { Button } from '@ui/shared/button';

export const CatalogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

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
            <Category isOpen={isOpen} close={close} />
            <div className="catalog__product">
              <div className="catalog__nav">
                <Button
                  className="catalog__filter-button"
                  text={
                    <span>
                      <span className="icon-filter"></span> Фильтр
                    </span>
                  }
                  onClick={() => {
                    open();
                  }}
                />
                <Sort />
              </div>

              <CatalogResult />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
