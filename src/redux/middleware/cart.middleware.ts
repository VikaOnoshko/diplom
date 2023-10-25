import { cartApi } from '@api/cart.api';
import { cartSlice } from '@redux/reducers/cart.reducer';
import { StoreType } from '@redux/store/store';
import { createListenerMiddleware } from '@reduxjs/toolkit';

const saveProductsInLocalstorage = (products: ItemAndCount<Product>[]) => {
  localStorage.setItem('products', JSON.stringify(products));
};

export const cartMiddleware = createListenerMiddleware();

// TODO: save to localstorage if not auth
cartMiddleware.startListening({
  actionCreator: cartSlice.actions.cartUpdated,
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as StoreType;

    const userId = state.user.user?.uid;
    const cartId = state.cart.cartId;
    const products = state.cart.products;

    if (userId) {
      if (cartId) {
        listenerApi.dispatch(
          cartApi.endpoints.update.initiate({
            id: cartId,
            products,
            userId,
          }),
        );
      } else {
        const res = await listenerApi.dispatch(
          cartApi.endpoints.create.initiate({
            products,
            userId,
          }),
        );

        if ('data' in res) {
          listenerApi.dispatch(cartSlice.actions.setCart(res.data));
        }
      }
    }

    saveProductsInLocalstorage(products);
  },
});

cartMiddleware.startListening({
  actionCreator: cartSlice.actions.addProduct,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(cartSlice.actions.cartUpdated());
  },
});

cartMiddleware.startListening({
  actionCreator: cartSlice.actions.removeProduct,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(cartSlice.actions.cartUpdated());
  },
});

cartMiddleware.startListening({
  actionCreator: cartSlice.actions.clear,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(cartSlice.actions.cartUpdated());
  },
});

cartMiddleware.startListening({
  actionCreator: cartSlice.actions.changeProductCount,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(cartSlice.actions.cartUpdated());
  },
});
