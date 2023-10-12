import { createSlice } from '@reduxjs/toolkit';

export type ThemeStoreType = {
  theme: string;
};

export const initialState: ThemeStoreType = {
  theme: 'light',
};

const setTheme = (theme: string) => {
  const html = document.querySelector('html');

  if (html) {
    html.dataset.theme = `theme-${theme}`;
  }
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: () => {
    setTheme(initialState.theme);

    return initialState;
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setTheme(state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
