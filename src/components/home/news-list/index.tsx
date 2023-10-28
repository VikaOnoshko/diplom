import { useEffect, useState } from 'react';
import './index.less';
import nav from '@assets/images/news/nav.png';
import ava from '@assets/images/news/ava.png';
import { NewsSwiper } from './news-swiper';
import { NewsCard } from './news-card';

const NEWSLIST: News[] = [
  {
    id: 1,
    img: ava,
    title: 'Как сохранить букет свежим: советы и рекомендации',
    text: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
  {
    id: 2,
    img: ava,
    title: 'Как сохранить букет свежим: советы и рекомендации',
    text: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
  {
    id: 3,
    img: ava,
    title: 'Как сохранить букет свежим: советы и рекомендации',
    text: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
];

export const HomeNewsList = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    setNews(NEWSLIST);
  }, []);

  return (
    <section className="forum">
      <div className="forum__container">
        <div className="forum__wrapper">
          <div className="forum__header">
            <h2 className="forum__title">Форум</h2>
            <div className="forum__pages">
              <span>Все новости</span>
              <div className="forum__img">
                <img src={nav} alt="nav"></img>
              </div>
            </div>
          </div>
          <div className="forum__body">
            <div className="forum__list">
              {news.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
            <NewsSwiper />
          </div>
        </div>
      </div>
    </section>
  );
};
