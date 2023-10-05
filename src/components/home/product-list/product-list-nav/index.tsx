import { ProductCard } from '../product-card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

export const ProductListNav = (product: Product[]) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="ptoduct-list__swiper"
    >
      <SwiperSlide key={product.id}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SwiperSlide>
    </Swiper>
  );
};
