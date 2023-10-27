import { useAppDispath, useAppSelector } from '@redux/store/store';
import './index.less';
import { Select } from '@ui/shared/select';
import { changeCurrency } from '@redux/reducers/currency.reducer';

export const Currency = () => {
  const { currency, type } = useAppSelector((state) => state.currency);
  const dispatch = useAppDispath();

  return (
    <div className="currency">
      <div className="currency__container">
        <div className="currency__wrapper">
          <Select
            className="currency__select"
            value={type}
            options={currency.map((item) => {
              return { name: item.name, value: item.name };
            })}
            onSelect={(value) => {
              dispatch(changeCurrency(value));
            }}
          />
        </div>
      </div>
    </div>
  );
};
