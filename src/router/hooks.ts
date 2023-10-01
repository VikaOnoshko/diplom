import { useNavigate } from 'react-router-dom';
import { PageNames } from './routes';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  return {
    goToCatalog: () => navigate(PageNames.CATALOG),
    goToHome: () => navigate(PageNames.HOME),
    goToCart: () => navigate(PageNames.CART),
    goToOrder: () => navigate(PageNames.ORDER),
    goToOrderCreated: (id: string) =>
      navigate(PageNames.ORDER_CREATED.replace(':id', id)),
    goToMyOrder: (id: string) =>
      navigate(PageNames.MY_ORDER.replace(':id', id)),
  };
};
