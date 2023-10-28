import { useAppNavigate } from '@router/hooks';
import './index.less';

type Props = {
  open?: boolean;
  close?: () => void;
};

export const Nav = ({ open, close }: Props) => {
  const { goToCatalog, goToHome } = useAppNavigate();

  return (
    <div className="header__navigation" data-open={open}>
      <span
        onClick={() => {
          goToHome();
          close && close();
        }}
      >
        Главная
      </span>
      <span
        onClick={() => {
          goToCatalog();
          close && close();
        }}
      >
        Каталог товаров
      </span>
      <span>Форум</span>
      <span>Отзывы</span>
      <span>Новости</span>
    </div>
  );
};
