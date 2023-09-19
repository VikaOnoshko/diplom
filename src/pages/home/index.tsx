import './index.less';

import { HomeBanner } from '@components/home/banner';
import { HomeForClient } from '@components/home/for-client';
import { ProductList } from '@components/home/product-list';
import { HomeNewsList } from '@components/home/news-list';

export const HomePage = () => {
  return (
    <div className="home">
      <HomeBanner />
      <HomeForClient />
      <ProductList title="Акции" filter={{ onSale: true }} />
      <ProductList title="Подарки" filter={{ category: 'present' }} />
      <HomeNewsList />
    </div>
  );
};
