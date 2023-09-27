import './index.less';

export type SelectProps = {
  title?: string;
  options: { name: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const Select = ({
  title,
  options,
  value,
  onChange,
  className,
}: SelectProps) => {
  const classSelect = `select ${className}`;

  return (
    <div className={classSelect}>
      {title && (
        <div className="select__text">
          <span>{title}</span>
        </div>
      )}
      <div className="select__name">
        <select
          name="category"
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="select__triangle"></div>
      </div>
    </div>
  );
};
