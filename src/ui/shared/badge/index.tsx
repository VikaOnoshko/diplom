export type BadgeProps = WithChildren & { badgeContent: string | number };

export const Badge = ({ children, badgeContent }: BadgeProps) => {
  return (
    <div className="badge">
      <div className="bage__body">{children}</div>
      {badgeContent && <div className="badge__content">{badgeContent}</div>}
    </div>
  );
};
