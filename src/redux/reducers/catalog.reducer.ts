import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  filter: { categories?: Id };
  sort: object;
};

const initialState: InitialStateType = {
  filter: {},
  sort: {},
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<object>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<object>) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSort } = catalogSlice.actions;

export default catalogSlice.reducer;
