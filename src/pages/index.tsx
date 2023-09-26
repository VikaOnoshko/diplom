import { Layout } from '@components/layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { PageNames } from '@router/routes';
import { CatalogPage } from './catalog';
import { CartPage } from './cart';

export const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route Component={HomePage} path={PageNames.HOME} />
        <Route Component={CatalogPage} path={PageNames.CATALOG} />
        <Route Component={CartPage} path={PageNames.CART} />
      </Routes>
    </Layout>
  );
};
