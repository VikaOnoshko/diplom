import './index.less';
import { Select } from '@ui/shared/select';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { setSort } from '@redux/reducers/catalog.reducer';

export const Sort = () => {
  const { sort } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispath();

  const handleChange = (value: string) => {
    dispatch(setSort(value));
  };

  return (
    <Select
      value={sort}
      onChange={handleChange}
      title={'Сортировка'}
      options={[
        { value: 'rating', name: 'Рейтинг по возрастанию' },
        { value: '-rating', name: 'Рейтинг по убыванию' },
        { value: 'price', name: 'Цена по возрастанию' },
        { value: '-price', name: 'Цена по убыванию' },
      ]}
    />
  );
};
