import { APP_MODE } from '@constants/app.constant';
import { BrowserRouter, HashRouter } from 'react-router-dom';

export const RouterProvider = ({ children }: WithChildren) => {
  if (APP_MODE === 'production') {
    return <HashRouter>{children}</HashRouter>;
  }

  return <BrowserRouter>{children}</BrowserRouter>;
};
