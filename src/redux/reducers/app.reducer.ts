import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const appSlice = createSlice({ name: "app", initialState, reducers: {} });

export const { reducer: appReducer, actions: appActions } = appSlice;
