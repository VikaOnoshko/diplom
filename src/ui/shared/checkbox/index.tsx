import './index.less';

type Props = {
  value: boolean;
  label: string;
  onChange: (value: boolean) => void;
  className?: string;
};

export const CheckBox = ({ value, label, onChange, className }: Props) => {
  const classLabel = `checkbox ${className}`;

  return (
    <label className={classLabel}>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => {
          onChange(e.currentTarget.checked);
        }}
      />
      <div className="checkbox__box"></div>
      <span className="checkbox__label">{label}</span>
    </label>
  );
};
