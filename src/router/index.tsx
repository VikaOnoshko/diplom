import { BrowserRouter as Router } from 'react-router-dom';

export const RouterProvider = ({ children }: WithChildren) => {
  return <Router>{children}</Router>;
};
