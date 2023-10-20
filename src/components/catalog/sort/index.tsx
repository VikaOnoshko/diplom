import './index.less';
import { Select } from '@ui/shared/select';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { setSort } from '@redux/reducers/catalog.reducer';
import { Button } from '@ui/shared/button';
import { useState } from 'react';

const SORT = [
  { value: 'rating', name: 'Рейтинг по возрастанию' },
  { value: '-rating', name: 'Рейтинг по убыванию' },
  { value: 'price', name: 'Цена по возрастанию' },
  { value: '-price', name: 'Цена по убыванию' },
];

export const Sort = () => {
  const { sort } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispath();

  const handleChange = (value: string) => {
    dispatch(setSort(value));
  };

  const sortLabel =
    SORT.find((item) => item.value === sort)?.name || 'Не выбран';

  const [isOptions, setIsOptions] = useState(false);

  return (
    <>
      <Select
        className="select"
        value={sort}
        onChange={handleChange}
        title={'Сортировка'}
        options={SORT}
      />
      <div className="button__filter">
        <Button
          text={sortLabel}
          onClick={() => {
            setIsOptions(!isOptions);
          }}
        />

        {isOptions && (
          <div
            className="button__options-list"
            onClick={() => {
              isOptions;
            }}
          >
            {SORT.map((item) => (
              <div className="button__optons__item">
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
