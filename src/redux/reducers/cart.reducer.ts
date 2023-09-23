import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const saveProducts = (products: ItemAndCount<Product>[]) => {
  localStorage.setItem('products', JSON.stringify(products));
};

const getProducts = (): ItemAndCount<Product>[] => {
  try {
    const products = localStorage.getItem('products');
    if (products) {
      return JSON.parse(products);
    } else {
      return [];
    }
  } catch {
    return [];
  }
};

export type InitialStateType = {
  products: ItemAndCount<Product>[];
};

export const initialState: InitialStateType = {
  products: getProducts(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const existProduct = state.products.find(
        (product) => product.item.id === action.payload.id,
      );

      if (existProduct) {
        this.changeProductCount(state, {
          payload: { count: existProduct.count + 1, item: existProduct.item },
          type: '',
        });
      } else {
        state.products = [
          ...state.products,
          { item: action.payload, count: 1 },
        ];
      }

      saveProducts(state.products);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.item.id !== action.payload,
      );

      saveProducts(state.products);
    },
    changeProductCount(state, action: PayloadAction<ItemAndCount<Product>>) {
      state.products = state.products.map((product) => {
        if (action.payload.item.id === product.item.id) {
          return action.payload;
        }
        return product;
      });

      saveProducts(state.products);
    },
    clear(state) {
      state.products = [];
      saveProducts(state.products);
    },
  },
});

export const { addProduct, removeProduct, changeProductCount, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
