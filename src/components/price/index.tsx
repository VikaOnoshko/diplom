type Props = {
  price: number;
};

export const Price = ({ price }: Props) => {
  return <span>{price.toFixed(2)} BYN</span>;
};
