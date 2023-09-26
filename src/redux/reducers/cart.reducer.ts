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

const changeProductCountInList = (
  productList: ItemAndCount<Product>[],
  prodcut: ItemAndCount<Product>,
) => {
  return productList.map((product) => {
    if (prodcut.item.id === product.item.id) {
      return prodcut;
    }

    return product;
  });
};

const removeProductFromList = (
  productList: ItemAndCount<Product>[],
  productId: number,
) => {
  return productList.filter((product) => product.item.id !== productId);
};

export type InitialStateType = {
  products: ItemAndCount<Product>[];
  delivery?: number | null;
  photo?: number | null;
  postCard?: number | null;
};

export const initialState: InitialStateType = {
  products: getProducts(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existProduct = state.products.find(
        (product) => product.item.id === action.payload.id,
      );

      if (existProduct) {
        state.products = changeProductCountInList(state.products, {
          item: action.payload,
          count: existProduct.count + 1,
        });
      } else {
        state.products = [
          ...state.products,
          { item: action.payload, count: 1 },
        ];
      }

      saveProducts(state.products);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = removeProductFromList(state.products, action.payload);

      saveProducts(state.products);
    },
    changeProductCount: (
      state,
      action: PayloadAction<ItemAndCount<Product>>,
    ) => {
      state.products =
        action.payload.count <= 0
          ? removeProductFromList(state.products, action.payload.item.id)
          : changeProductCountInList(state.products, action.payload);

      saveProducts(state.products);
    },
    clear: (state) => {
      state.products = [];
      saveProducts(state.products);
    },
  },
});

export const { addProduct, removeProduct, changeProductCount, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
