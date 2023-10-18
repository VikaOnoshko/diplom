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
import { UserContext } from '@components/user';
import { useContext } from 'react';

export const Pages = () => {
  const { isAuth } = useContext(UserContext);

  return (
    <Layout>
      <Routes>
        <Route Component={MyOrder} path={PageNames.MY_ORDER} />
        <Route Component={HomePage} path={PageNames.HOME} />
        <Route Component={CatalogPage} path={PageNames.CATALOG} />
        <Route Component={CartPage} path={PageNames.CART} />
        <Route Component={OrderPage} path={PageNames.ORDER} />
        <Route Component={OrderCreated} path={PageNames.ORDER_CREATED} />
        {isAuth && (
          <Route Component={OrderHistory} path={PageNames.ORDER_HISTORY} />
        )}
      </Routes>
    </Layout>
  );
};
