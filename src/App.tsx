import { StoreProvider } from '@redux/store/store.proveder';
import { ThemeProvider } from '@theme';
import { RouterProvider } from '@router/index';
import { Pages } from '@pages/index';
import { InitProvider } from '@providers/init';

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider>
          <InitProvider>
            <Pages />
          </InitProvider>
        </RouterProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
