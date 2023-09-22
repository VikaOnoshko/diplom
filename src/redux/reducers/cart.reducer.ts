import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
  products: ItemAndCount<Product>[];
};

export const initialState: InitialStateType = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // FIXME: обработать случай когда продукт есть в корзине
      state.products = [...state.products, { item: action.payload, count: 1 }];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.item.id !== action.payload,
      );
    },
    changeProductCount: (
      state,
      action: PayloadAction<ItemAndCount<Product>>,
    ) => {
      state.products = state.products.map((product) => {
        if (action.payload.item.id === product.item.id) {
          return action.payload;
        }
        return product;
      });
    },
    clear: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, changeProductCount, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
