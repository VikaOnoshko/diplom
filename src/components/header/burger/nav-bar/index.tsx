import { useAppNavigate } from '@router/hooks';
import './index.less';

type Props = {
  open: boolean;
  close: () => void;
};

export const Nav = ({ open, close }: Props) => {
  const { goToCatalog } = useAppNavigate();

  return (
    <div className="header__navigation" data-open={open}>
      <span
        onClick={() => {
          goToCatalog();
          close();
        }}
      >
        Каталог товаров
      </span>
      <span>Форум</span>
      <span>Отзывы</span>
      <span>Акции</span>
      <span>Новости</span>
    </div>
  );
};
