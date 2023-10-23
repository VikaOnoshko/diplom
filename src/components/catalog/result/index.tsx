import { useAppSelector } from '@redux/store/store';
import { ProductService } from '@services/product.service';
import { Button } from '@ui/shared/button';
import { useEffect, useState } from 'react';
import { ProductCard } from '@components/home/product-list/product-card';
import './index.less';

export const CatalogResult = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const { sort, filter } = useAppSelector((store) => store.catalog);

  useEffect(() => {
    ProductService.getList({ ...filter, sortby: sort, page, limit: 12 }).then(
      ({ items, count }) => {
        if (page === 1) {
          setProductList(items);
        } else {
          setProductList([...productList, ...items]);
        }
        setTotalCount(count);
      },
    );
  }, [page, sort, filter]);

  useEffect(() => {
    setPage(1);
  }, [sort, filter]);

  const moreProducts = totalCount - productList.length;

  return (
    <div className="catalog">
      {productList.length === 0 && (
        <div className="catalog-text">
          <span>Товаров не найдено</span>
        </div>
      )}
      {productList.length > 0 && (
        <div className="catalog-card">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {productList.length > 0 && (
        <div className="catalog__pagination">
          {moreProducts > 0 && (
            <Button
              onClick={() => setPage(page + 1)}
              text={`Еще ${moreProducts} товаров`}
            />
          )}
        </div>
      )}
    </div>
  );
};
