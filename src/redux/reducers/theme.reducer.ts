import { createSlice } from '@reduxjs/toolkit';

export type ThemeStoreType = {
  theme: string;
};

const saveTheme = (theme: string) => {
  localStorage.setItem('theme', theme);
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
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
    return { theme };
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setTheme(state.theme);
      saveTheme(state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
