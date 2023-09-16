import './index.less';

import { HomeBanner } from '@components/home/banner';
import { HomeForClient } from '@components/home/for-client';
import { ProductList } from '@components/home/product-list';
import { HomeNewsList } from '@components/home/news-list';
import { HomeMap } from '@components/home/map';
import { Layout } from '@components/layout';

export const HomePage = () => {
  return (
    <Layout>
      <div className="home">
        <HomeBanner />
        <HomeForClient />
        <ProductList title="Акции" />
        <ProductList title="Подарки" />
        <HomeNewsList />
        <HomeMap />
      </div>
    </Layout>
  );
};
