import './index.less';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { ThemesContextType } from '../../../context/theme/themes';
// import { ThemesContext } from '../../../context/theme';

interface FieldProps {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  isError?: boolean;
  errorText?: string;
}

export const Field = ({
  label,
  type,
  inputProps,
  isError,
  errorText,
}: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const currentType = type === 'password' && showPassword ? 'text' : type;
  const currentIcon = showPassword ? (
    <VisibilityOffIcon className="field_icon" />
  ) : (
    <VisibilityIcon />
  );

  //   const dataContext = useContext<ThemesContextType>(ThemesContext);

  return (
    <div className="field">
      <span className="field__label">{label}</span>
      <div className="field__input-container">
        <input type={currentType} className="field__input" {...inputProps} />
        {type === 'password' && (
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
