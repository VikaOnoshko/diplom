import { Layout } from '@components/layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { PageNames } from '@router/routes';
import { CatalogPage } from './catalog';
import { CartPage } from './cart';
import { OrderPage } from './order';

export const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route Component={HomePage} path={PageNames.HOME} />
        <Route Component={CatalogPage} path={PageNames.CATALOG} />
        <Route Component={CartPage} path={PageNames.CART} />
        <Route Component={OrderPage} path={PageNames.ORDER} />
      </Routes>
    </Layout>
  );
};
