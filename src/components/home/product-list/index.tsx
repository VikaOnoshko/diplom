import './index.less';
import { useEffect, useState } from 'react';
import { ProductCard } from './product-card';
import { ProductService } from '@services/product.service';
import { ProductSwiper } from './product-swiper';

type ProductListProps = { title: string; filter?: Partial<Product> };

export const ProductList = ({ title, filter }: ProductListProps) => {
  const [maxPage, setMaxPage] = useState(Infinity);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    ProductService.getList({
      page,
      limit: 8,
      ...filter,
    })
      .then((data) => {
        setProducts(data.items);
        setMaxPage(Math.ceil(data.count / 8));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const goToNextPage = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="product-list">
      <div className="product-list__container">
        <div className="product-list__wrapper">
          <div className="product-list__header">
            <h2 className="product-list__title">{title}</h2>
            <div className="product-list__pages">
              <div
                className="product-list__arrow product-list__left"
                data-disabled={page === 1}
                onClick={goToPreviousPage}
              ></div>
              <div
                className="product-list__arrow product-list__right"
                data-disabled={page === maxPage}
                onClick={goToNextPage}
              ></div>
            </div>
          </div>
          <ProductSwiper loading={loading} products={products} />
          <div className="product-list__body">
            {loading &&
              new Array(8)
                .fill(1)
                .map((_, index) => <ProductCard key={index} loading={true} />)}
            {!loading &&
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  loading={false}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
