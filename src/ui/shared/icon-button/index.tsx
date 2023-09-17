import './index.less';

export type IconButtonProps = WithChildren &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button {...props} className="icon-button">
      {children}
    </button>
  );
};
