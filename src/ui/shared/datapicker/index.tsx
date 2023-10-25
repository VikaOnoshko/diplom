import 'react-datepicker/dist/react-datepicker.css';
import './index.less';

import ReactDatePicker from 'react-datepicker';
import { Field, FieldProps } from '../field';
import { useRef } from 'react';

export type DatepickerProps = Omit<FieldProps, 'onChange' | 'value'> & {
  selected?: Date | null;
  onChange: (selected: Date | null) => void;
};

export const Datapicker = ({
  selected,
  onChange,
  ...fieldProps
}: DatepickerProps) => {
  const ref = useRef<ReactDatePicker>(null);

  return (
    <Field
      {...fieldProps}
      renderIcon={() => (
        <span
          className="icon-calendar_today"
          onClick={() => ref.current?.setFocus()}
        ></span>
      )}
      renderInput={() => (
        <ReactDatePicker
          ref={ref}
          wrapperClassName="datepicker"
          selected={selected}
          onChange={onChange}
          // customClass="my-datepicker"
          // inputClass="my-input-datepicker"
          // calendarClass="my-calendar-datepicker"
          dateFormat="dd.MM.yyyy"
        />
      )}
    />
  );
};
