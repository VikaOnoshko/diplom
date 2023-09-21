import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  filter: object;
  sort: string;
};

const initialState: InitialStateType = {
  filter: {},
  sort: 'price',
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<object>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSort } = catalogSlice.actions;

export default catalogSlice.reducer;
