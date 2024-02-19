import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ava from '@assets/images/news/ava.png';
import { NewsCard } from '../news-card';
import { useEffect, useState } from 'react';
import './index.less';

const NEWSLIST: News[] = [
  {
    _id: '1',
    img: ava,
    title: 'Как сохранить букет свежим: советы и рекомендации',
    text: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
  {
    _id: '2',
    img: ava,
    title: 'Как сохранить букет свежим: советы и рекомендации',
    text: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
  {
    _id: '3',
    img: ava,
    title: 'Как сохранить букет свежим: советы и рекомендации',
    text: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
];

export const NewsSwiper = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    setNews(NEWSLIST);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="news__swiper"
      >
        {news.map((item) => (
          <SwiperSlide key={item._id}>
            <NewsCard key={item._id} news={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
