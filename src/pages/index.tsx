import { Layout } from '@components/layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { PageNames } from '@router/routes';
import { CatalogPage } from './catalog';
import { CartPage } from './cart';
import { OrderPage } from './order';
import { OrderCreated } from './order-created';
import { MyOrder } from './my-order';
import { OrderHistory } from './order-history';

export const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route Component={HomePage} path={PageNames.HOME} />
        <Route Component={CatalogPage} path={PageNames.CATALOG} />
        <Route Component={CartPage} path={PageNames.CART} />
        <Route Component={OrderPage} path={PageNames.ORDER} />
        <Route Component={OrderCreated} path={PageNames.ORDER_CREATED} />
        <Route Component={MyOrder} path={PageNames.MY_ORDER} />
        <Route Component={OrderHistory} path={PageNames.ORDER_HISTORY} />
      </Routes>
    </Layout>
  );
};
