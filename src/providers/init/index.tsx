import { loadCurrencyRates } from '@redux/reducers/currency.reducer';
import { useAppDispath } from '@redux/store/store';
import { useEffect } from 'react';

export const InitProvider = ({ children }: WithChildren) => {
  const dispatch = useAppDispath();

  useEffect(() => {
    dispatch(loadCurrencyRates());
  }, []);

  return <>{children}</>;
};
