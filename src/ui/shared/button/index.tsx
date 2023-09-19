import './index.less';

type ButtonProps = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <div className="button">
      <button {...props}>{text}</button>
    </div>
  );
};
