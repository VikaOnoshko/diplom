import './index.less';
import { useEffect, useState } from 'react';
import { ProductCard } from './product-card';
import fl from '@assets/images/card/img1.png';

type ProductListProps = { title: string };

const PRODUCTS: Product[] = [
  {
    id: 1,
    img: fl,
    name: '25 розовых пионовидных роз',
    favorite: true,
    top: true,
    rating: 2.5,
    sale: 13,
    price: 67,
  },
  {
    id: 2,
    img: 'https://cojo.ru/wp-content/uploads/2022/12/buket-tsvetov-bez-fona-1.webp',
    name: '25 розовых ',
    favorite: false,
    top: false,
    rating: 5,
    sale: 10,
    price: 100,
  },
  {
    id: 3,
    img: 'https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-849-295x340.png',
    name: '25 розовых пионовидных роз',
    favorite: true,
    top: true,
    rating: 4,
    price: 100,
    sale: 5,
  },
  {
    id: 4,
    img: 'https://majkop.cvety-podarki.ru/wa-data/public/shop/products/28/10/1028/images/2187/2187.970.jpg',
    name: '25 розовых пионовидных роз',
    favorite: true,
    top: true,
    rating: 4.5,
    sale: 15,
    price: 100,
  },
  {
    id: 5,
    img: fl,
    name: '25 розовых пионовидных роз',
    favorite: true,
    top: false,
    rating: 5,
    sale: 10,
    price: 100,
  },
  {
    id: 6,
    img: fl,
    name: '25 розовых пионовидных роз',
    favorite: true,
    top: true,
    rating: 3.5,
    sale: 5,
    price: 100,
  },
  {
    id: 11,
    img: fl,
    name: '25 розовых пионовидных роз',
    favorite: true,
    top: true,
    rating: 4,
    sale: 10,
    price: 100,
  },
  {
    id: 12,
    img: fl,
    name: '25 розовых пионовидных роз',
    favorite: false,
    top: false,
    rating: 4.5,
    sale: 15,
    price: 100,
  },
];

export const ProductList = ({ title }: ProductListProps) => {
  const [produts, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <section className="product-list">
      <div className="product-list__container">
        <div className="product-list__wrapper">
          <div className="product-list__header">
            <h2 className="product-list__title">{title}</h2>
            <div className="product-list__pages">
              <div className="product-list__arrow product-list__left"></div>
              <div className="product-list__arrow product-list__right"></div>
            </div>
          </div>
          <div className="product-list__body">
            {produts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
