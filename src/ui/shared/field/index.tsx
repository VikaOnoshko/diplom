import './index.less';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export type FieldProps = {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

  renderInput?: (
    inputProps?: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
  ) => React.ReactNode;

  renderIcon?: () => React.ReactNode;

  label?: string;
  type?: React.HTMLInputTypeAttribute;
  isError?: boolean;
  errorText?: string;
};

export const Field = ({
  label,
  type,
  inputProps,
  isError,
  errorText,
  renderInput,
  renderIcon,
}: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const currentType = type === 'password' && showPassword ? 'text' : type;

  const currentIcon = showPassword ? (
    <VisibilityOffIcon className="field__eyes" />
  ) : (
    <VisibilityIcon className="field__eyes" />
  );

  return (
    <div className="field">
      {!!label && <span className="field__label">{label}</span>}
      <div className="field__input-container">
        {renderInput ? (
          renderInput(inputProps)
        ) : (
          <input type={currentType} className="field__input" {...inputProps} />
        )}
        {renderIcon && (
          <button type="button" className="field__icon">
            {renderIcon()}
          </button>
        )}
        {!renderIcon && type === 'password' && (
          <button type="button" className="field__eyes" onClick={handleClick}>
            {currentIcon}
          </button>
        )}
      </div>

      {isError && (
        <div className="field__container">
          <p className="field__text">{errorText}</p>
        </div>
      )}
    </div>
  );
};
