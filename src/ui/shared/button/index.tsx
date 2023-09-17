import './index.less';

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return (
    <div className="button">
      <button>{text}</button>
    </div>
  );
};
