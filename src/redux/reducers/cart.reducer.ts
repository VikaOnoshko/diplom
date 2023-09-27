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
  delivery?: number;
  photo?: number | null;
  postCard?: number | null;
  vase?: number | null;
};

export const initialState: InitialStateType = {
  products: getProducts(),
  delivery: 10,
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

    setVase: (state, action: PayloadAction<number | null>) => {
      state.vase = action.payload;
    },

    setPostCard: (state, action: PayloadAction<number | null>) => {
      state.postCard = action.payload;
    },
    setDelivery: (state, action: PayloadAction<number>) => {
      state.delivery = action.payload;
    },
    setPtoto: (state, action: PayloadAction<number | null>) => {
      state.photo = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  changeProductCount,
  clear,
  setVase,
  setPostCard,
  setDelivery,
  setPtoto,
} = cartSlice.actions;

export default cartSlice.reducer;
