import { Price } from '@components/price';
import './index.less';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { addProduct, removeProduct } from '@redux/reducers/cart.reducer';

type SearchResultProductProps = {
  product: Product;
};

export const SearchResultProduct = ({ product }: SearchResultProductProps) => {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispath();

  const handleDeleteProduct = () => {
    dispatch(removeProduct(product.id));
  };

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

  const hasInCart = products.some(({ item }) => item?.id === product?.id);

  return (
    <li
      className="main-search__result-product result-product "
      key={product.id}
    >
      <img src={product.img} alt="product" />
      <div className="result-product__info">
        <span className="result-product__name">{product.name}</span>
        <span className="result-product__price">
          <Price price={product.price} />
        </span>
      </div>
      <div className="result-product__actions">
        {hasInCart && (
          <span className="icon-delete" onClick={handleDeleteProduct}></span>
        )}

        {!hasInCart && (
          <span className="icon-cart" onClick={handleAddProduct}></span>
        )}
      </div>
    </li>
  );
};
