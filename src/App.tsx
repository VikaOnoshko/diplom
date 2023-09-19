import { StoreProvider } from '@redux/store/store.proveder';
import { ThemeProvider } from '@theme';
import { RouterProvider } from '@router/index';
import { Pages } from '@pages/index';

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider>
          <Pages />
        </RouterProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
