import { StoreType } from '@redux/store/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export type UserStore = {
  isAuth: boolean;
  user: User | null;
};

export const initialState: UserStore = {
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
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
