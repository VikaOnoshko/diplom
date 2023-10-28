import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderService } from '@services/order.service';
import { clear } from './cart.reducer';

const defaultOrder = {
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
} as Order;

export type OrderStore = {
  value: Order;
  isValid: boolean;
};

const getOrder = (): Order => {
  try {
    const order = localStorage.getItem('order');
    if (order) {
      const data = JSON.parse(order) as Order;

      data.recipient.date =
        data.recipient.date && new Date(data.recipient.date);

      return data;
    } else {
      return defaultOrder;
    }
  } catch {
    return defaultOrder;
  }
};

export const initialState: OrderStore = {
  value: getOrder(),
  isValid: false,
};

const saveOrder = (order: Order) => {
  localStorage.setItem('order', JSON.stringify(order));
};

export const createOrder =
  (body: Order, onSuccess: (order: Order) => void) =>
  async (dispatch: Dispatch) => {
    const newOrder = await OrderService.create(body);

    onSuccess(newOrder);

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
    setIsValidOrder: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;

      console.log(state.isValid);
    },
  },
});

export const { setOrder, setIsValidOrder } = orderSlice.actions;

export default orderSlice.reducer;
