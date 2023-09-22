import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { appReducer } from '../reducers/app.reducer';
import userReducer from '@redux/reducers/userReducer';
import catalogReducer from '@redux/reducers/catalog.reducer';

export const store = configureStore({
  reducer: { app: appReducer, user: userReducer, catalog: catalogReducer },
});

export type StoreType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export type AppDispath = typeof store.dispatch;
export const useAppDispath: () => AppDispath = useDispatch;
