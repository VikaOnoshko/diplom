import './index.less';

import { HomeBanner } from '@components/home/banner';
import { HomeForClient } from '@components/home/for-client';
import { ProductList } from '@components/home/product-list';
import { HomeNewsList } from '@components/home/news-list';
import { HomeSearch } from '@components/home/search';

export const HomePage = () => {
  return (
    <div className="home">
      <HomeSearch />
      <HomeBanner />
      <HomeForClient />
      <ProductList title="Акции" filter={{ onSale: true }} />
      <ProductList title="Подарки" filter={{ category: 'present' }} />
      <HomeNewsList />
    </div>
  );
};
