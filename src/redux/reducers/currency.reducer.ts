import { StoreType } from '@redux/store/store';
import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrencyService } from '@services/currency.service';

export type CurrencyStore = {
  type: string;
  currency: Currency[];
};

export const initialState: CurrencyStore = {
  type: 'BYN',
  currency: [
    { name: 'BYN', rate: 1 },
    { name: 'EUR', rate: 1 },
    { name: 'USD', rate: 1 },
  ],
};

const LOAD_CURRENCY_RATES = 'Currency/loadCurrencyRates';

export const loadCurrencyRates = () => async (dispatch: Dispatch) => {
  const rates = (await CurrencyService.getList()).filter((item) =>
    ['USD', 'EUR'].includes(item.name),
  );

  dispatch({
    type: LOAD_CURRENCY_RATES,
    payload: [{ name: 'BYN', rate: 1 }, ...rates],
  });
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<Currency['name']>) => {
      state.type = action.payload;
    },
    updateCurrencyList: (state, action) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase<string, PayloadAction<Currency[]>>(
      LOAD_CURRENCY_RATES,
      (state, action) => {
        state.currency = action.payload;
      },
    );
  },
});

export const { changeCurrency, updateCurrencyList } = currencySlice.actions;

export const selectCurrent = (state: StoreType) => state.currency.currency;

export default currencySlice.reducer;
