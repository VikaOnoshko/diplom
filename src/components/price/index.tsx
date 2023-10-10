import { useAppSelector } from '@redux/store/store';

type Props = {
  price: number;
};

export const Price = ({ price }: Props) => {
  const { currency, type } = useAppSelector((state) => state.currency);

  const activeCurrency = currency.find((item) => {
    return item.name === type;
  });

  return (
    <span>
      {(price / (activeCurrency?.rate || 1)).toFixed(2)} {type}
    </span>
  );
};
