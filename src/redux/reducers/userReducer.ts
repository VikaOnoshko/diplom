import { StoreType } from '@redux/store/store';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: StoreType) => state.user.user;

export default userSlice.reducer;
