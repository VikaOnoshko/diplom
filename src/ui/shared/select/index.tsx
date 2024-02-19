import { useEffect, useState, useCallback } from 'react';
import './index.less';

type SelectProps = {
  onSelect: (value: object) => void;
  title?: string | React.ReactNode;
  options: { name: string; value: object }[];
  value: object;
  className?: string;
  variant?: string;
};

export const Select = ({
  title,
  options,
  variant,
  className,
  value,
  onSelect,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsOpen(!isOpen);
    },
    [isOpen],
  );

  const missclick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', missclick);

    return () => document.body.removeEventListener('click', missclick);
  }, [missclick]);

  const classSelect = `select ${className}`;
  const selectedValue = options.find((item) => item.value === value);

  return (
    <div className={classSelect} data-variant={variant} onClick={toggle}>
      {title && (
        <div className="select__title">
          <span>{title}</span>
        </div>
      )}

      <div className="select__body">
        <div className="select__value">
          <span>{selectedValue?.name}</span>
        </div>
        <div className="select__options-list" data-open={isOpen}>
          {options.map((item) => (
            <div
              className="select__optons-item"
              onClick={() => {
                onSelect(item.value);
              }}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
