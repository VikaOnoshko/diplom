import './index.less';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { setSort } from '@redux/reducers/catalog.reducer';
import { Button } from '@ui/shared/button';
import { useState } from 'react';
import { Select } from '@ui/shared/select';

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
        title={'Сортировка'}
        options={SORT}
        onSelect={handleChange}
      />

      <div className="button__filter">
        <Button
          text={sortLabel}
          onClick={() => {
            setIsOptions(!isOptions);
          }}
        />

        {isOptions && (
          <div className="button__options-list">
            {SORT.map((item) => (
              <div
                className="button__optons__item"
                onClick={() => {
                  handleChange(item.value);
                  setIsOptions(!isOptions);
                }}
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
