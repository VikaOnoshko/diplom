export type IconButtonProps = WithChildren;

export const IconButton = ({ children }: IconButtonProps) => {
  return <button>{children}</button>;
};
