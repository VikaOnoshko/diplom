import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { appReducer } from '@redux/reducers/app.reducer';
import userReducer from '@redux/reducers/userReducer';
import catalogReducer from '@redux/reducers/catalog.reducer';
import currencyReducer from '@redux/reducers/currency.reducer';
import cartReducer from '@redux/reducers/cart.reducer';
import orderReducer from '@redux/reducers/order.reducer';
import themeReducer from '@redux/reducers/theme.reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    catalog: catalogReducer,
    cart: cartReducer,
    currency: currencyReducer,
    order: orderReducer,
    theme: themeReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export type AppDispath = typeof store.dispatch;
export const useAppDispath: () => AppDispath = useDispatch;
