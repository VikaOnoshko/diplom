import { useNavigate } from 'react-router-dom';
import { PageNames } from './routes';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  return {
    goToCatalog: () => navigate(PageNames.CATALOG),
    goToHome: () => navigate(PageNames.HOME),
    goToCart: () => navigate(PageNames.CART),
  };
};
