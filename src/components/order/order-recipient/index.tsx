import './index.less';
import { Field } from '@ui/shared/field';
import { OrderForm } from '../order-form';
import { Datapicker } from '@ui/shared/datapicker';

type Props = {
  values: Order['recipient'];
  onChange: (values: Order['recipient']) => void;
};

export const OrderRecipient = ({ values, onChange }: Props) => {
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
          />
          <Field
            label="Телефон получателя*"
            inputProps={{
              value: values.telephone,
              onChange: (e) =>
                onChange({ ...values, telephone: e.currentTarget.value }),
            }}
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
          />
        </div>
        <Field
          label="Адрес*"
          inputProps={{
            value: values.adress,
            onChange: (e) =>
              onChange({ ...values, adress: e.currentTarget.value }),
          }}
        />
        <Field
          label="Время доставки"
          inputProps={{
            value: values.time,
            onChange: (e) =>
              onChange({ ...values, time: e.currentTarget.value }),
          }}
        />
      </OrderForm>
    </div>
  );
};
