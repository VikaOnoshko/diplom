import { StoreProvider } from '@redux/store/store.proveder';
import { RouterProvider } from '@router/index';
import { Pages } from '@pages/index';
import { InitProvider } from '@providers/init';

export const App = () => {
  return (
    <StoreProvider>
      <RouterProvider>
        <InitProvider>
          <Pages />
        </InitProvider>
      </RouterProvider>
    </StoreProvider>
  );
};
