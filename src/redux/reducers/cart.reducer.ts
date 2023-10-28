import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const getProductsFromLocalstorage = (): ItemAndCount<Product>[] => {
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
  cartId?: number;
  products: ItemAndCount<Product>[];
  delivery?: number;
  photo?: number | null;
  postCard?: number | null;
  vase?: number | null;
};

export const initialState: InitialStateType = {
  products: getProductsFromLocalstorage(),
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
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = removeProductFromList(state.products, action.payload);
    },

    changeProductCount: (
      state,
      action: PayloadAction<ItemAndCount<Product>>,
    ) => {
      state.products =
        action.payload.count <= 0
          ? removeProductFromList(state.products, action.payload.item.id)
          : changeProductCountInList(state.products, action.payload);
    },

    clear: (state) => {
      state.products = [];
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

    cartUpdated: () => {},

    setCart: (state, action: PayloadAction<Cart>) => {
      state.cartId = action.payload.id;
      state.products = action.payload.products;
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
