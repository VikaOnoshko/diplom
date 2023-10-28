import { cartApi } from '@api/cart.api';
import { onAuthChanged } from '@providers/firebase';
import { cartSlice } from '@redux/reducers/cart.reducer';
import { loadCurrencyRates } from '@redux/reducers/currency.reducer';
import { login } from '@redux/reducers/userReducer';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { Loader } from '@ui/shared/loader';
import { useEffect, useState } from 'react';

export const InitProvider = ({ children }: WithChildren) => {
  const dispatch = useAppDispath();
  const [isInit, setIsInit] = useState(false);
  const user = useAppSelector((state) => state.user.user);

  const { data } = cartApi.useGetByUserIdQuery(user?.uid as string, {
    skip: !user,
  });

  useEffect(() => {
    if (data) {
      dispatch(cartSlice.actions.setCart(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(loadCurrencyRates());
  }, [dispatch]);

  useEffect(() => {
    onAuthChanged().then((user) => {
      if (user) {
        dispatch(login(user));
      }
      setIsInit(true);
    });
  }, [dispatch]);

  if (isInit) return <>{children}</>;

  return <Loader />;
};
