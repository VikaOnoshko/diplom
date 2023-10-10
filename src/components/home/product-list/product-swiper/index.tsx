import { ProductCard } from '../product-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './index.less';

type Props = {
  products: Product[];
};

export const ProductSwiper = ({ products }: Props) => {
  const productSlides = products.reduce<Product[][]>((acc, cur, index) => {
    if (index % 4 === 0) {
      acc.push([]);
    }

    (acc.at(-1) as Product[]).push(cur);

    return acc;
  }, []);

  // -1: acc = [];
  // 0: acc = [[0]];
  // 1: acc = [[0,1]];
  // 2: acc = [[0,1,2]];
  // 3: acc = [[0,1,2,3]];
  // 4: acc = [[0,1,2,3],[]];

  return (
    <Swiper
      slidesPerView={1}
      grid={{ rows: 2, fill: 'column' }}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="product-list__swiper"
    >
      {productSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="product-list__slide">
            {slide.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
