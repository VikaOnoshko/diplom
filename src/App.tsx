import { HomePage } from '@pages/home';
import { StoreProvider } from '@redux/store/store.proveder';
import { ThemeProvider } from '@theme';

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </StoreProvider>
  );
};
