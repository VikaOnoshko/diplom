import { onAuthChanged } from '@providers/firebase';
import { loadCurrencyRates } from '@redux/reducers/currency.reducer';
import { login } from '@redux/reducers/userReducer';
import { useAppDispath } from '@redux/store/store';
import { Loader } from '@ui/shared/loader';
import { useEffect, useState } from 'react';

export const InitProvider = ({ children }: WithChildren) => {
  const dispatch = useAppDispath();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    dispatch(loadCurrencyRates());
  }, []);

  useEffect(() => {
    onAuthChanged().then((user) => {
      if (user) {
        dispatch(login(user));
      }
      setIsInit(true);
    });
  }, []);

  if (isInit) return <>{children}</>;

  return <Loader />;
};
