import './index.less';
import { useState, useEffect, useRef } from 'react';
import { ProductService } from '@services/product.service';
import { EmptySearchResult } from './empthy-result';
import { SearchResultProduct } from './search-result';

export const HomeSearch = () => {
  const [isCanDisplay, setIsCanDisplay] = useState(false);
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const debounce = useRef(0);

  useEffect(() => {
    clearTimeout(debounce.current);

    if (query) {
      debounce.current = window.setTimeout(() => {
        ProductService.getList({ name: query, page: 1, limit: 5 }).then(
          (data) => {
            setProducts(data.items);
            setIsCanDisplay(true);
          },
        );
      }, 500);
    }
  }, [query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section className="main-search">
      <div className="main-search__container">
        <div className="main-search__wrapper">
          <div className="main-search__input-box">
            <input
              type="text"
              placeholder="Поиск по товарам"
              value={query}
              onChange={handleChange}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <span className="icon-search"></span>
          </div>
          {focus &&
            isCanDisplay &&
            (products.length > 0 ? (
              <div className="main-search__result-list">
                {products.map((product) => (
                  <SearchResultProduct key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <EmptySearchResult />
            ))}
        </div>
      </div>
    </section>
  );
};
