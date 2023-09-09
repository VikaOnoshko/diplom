import './index.less';

export type IconButtonProps = WithChildren;

export const IconButton = ({ children }: IconButtonProps) => {
  return <button className="icon-button">{children}</button>;
};
