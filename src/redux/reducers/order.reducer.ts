import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderService } from '@services/order.service';
import { clear } from './cart.reducer';

const defaultOrder: Order = {
  recipient: {
    name: '',
    telephone: '',
    date: null,
    region: '',
    adress: '',
    time: '',
  },
  sender: {
    name: '',
    telephone: '',
    email: '',
  },
  delivery: {
    isSurprice: false,
    isPhoto: false,
    isVase: false,
    isNotify: false,
    isPostcard: false,
    isBusinessCard: false,
    isPayPostcard: false,
    postcardType: '',
    postcardText: '',
  },
};

export type OrderStore = {
  value: Order;
};

const getOrder = (): Order => {
  try {
    const order = localStorage.getItem('order');
    if (order) {
      return JSON.parse(order);
    } else {
      return defaultOrder;
    }
  } catch {
    return defaultOrder;
  }
};

export const initialState: OrderStore = {
  value: getOrder(),
};

const saveOrder = (order: Order) => {
  localStorage.setItem('order', JSON.stringify(order));
};

export const createOrder = (body: Order) => async (dispatch: Dispatch) => {
  await OrderService.create(body);

  dispatch(setOrder({ ...defaultOrder }));
  dispatch(clear());
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<Order>) => {
      state.value = action.payload;

      saveOrder(action.payload);
    },
  },
});

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
