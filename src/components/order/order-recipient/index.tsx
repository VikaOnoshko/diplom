import './index.less';
import { Field } from '@ui/shared/field';
import { OrderForm } from '../order-form';
import { Datapicker } from '@ui/shared/datapicker';
import { FormikErrors } from 'formik';
import { Select } from '@ui/shared/select';

type Props = {
  values: Order['recipient'];
  errors?: FormikErrors<Order['recipient']>;
  onChange: (values: Order['recipient']) => void;
};

export const OrderRecipient = ({ values, errors, onChange }: Props) => {
  return (
    <div className="order-recipient">
      <OrderForm title="1. Контакты получателя">
        <div>
          <Field
            label="Имя получателя*"
            inputProps={{
              value: values.name,
              onChange: (e) =>
                onChange({ ...values, name: e.currentTarget.value }),
            }}
            errorText={errors?.name}
            isError={!!errors?.name}
          />
          <Field
            label="Телефон получателя*"
            inputProps={{
              value: values.telephone,
              onChange: (e) =>
                onChange({ ...values, telephone: e.currentTarget.value }),
            }}
            errorText={errors?.telephone}
            isError={!!errors?.telephone}
          />
          <Datapicker
            label="Дата доставки"
            selected={values.date}
            onChange={(e) => onChange({ ...values, date: e })}
          />
          <Field
            label="Регион*"
            inputProps={{
              value: values.region,
              onChange: (e) =>
                onChange({ ...values, region: e.currentTarget.value }),
            }}
            errorText={errors?.region}
            isError={!!errors?.region}
          />
        </div>
        <Field
          label="Адрес*"
          inputProps={{
            value: values.adress,
            onChange: (e) =>
              onChange({ ...values, adress: e.currentTarget.value }),
          }}
          errorText={errors?.adress}
          isError={!!errors?.adress}
        />
        <Select
          className="order-form__delivery"
          variant="order"
          title="Время доставки"
          value={values.time}
          onSelect={(value) => onChange({ ...values, time: value })}
          options={[
            { name: '09:00 - 10:00', value: '09:00 - 10:00' },
            { name: '11:00 - 12:00', value: '11:00 - 12:00' },
            { name: '13:00 - 14:00', value: '13:00 - 14:00' },
            { name: '15:00 - 16:00', value: '15:00 - 16:00' },
            { name: '17:00 - 18:00', value: '17:00 - 18:00' },
            { name: '19:00 - 20:00', value: '19:00 - 20:00' },
          ]}
        />
      </OrderForm>
    </div>
  );
};
