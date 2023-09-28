import { Field } from '@ui/shared/field';
import { OrderForm } from '../order-form';
import './index.less';
import { FormikErrors } from 'formik';

type Props = {
  values: Order['sender'];
  errors?: FormikErrors<Order['sender']>;
  onChange: (values: Order['sender']) => void;
};

export const OrderSender = ({ values, onChange, errors }: Props) => {
  return (
    <div className="order-sender">
      <OrderForm title="2. Контакты отправителя">
        <div>
          <Field
            label="Имя*"
            inputProps={{
              value: values.name,
              onChange: (e) =>
                onChange({ ...values, name: e.currentTarget.value }),
            }}
            errorText={errors?.name}
            isError={!!errors?.name}
          />
          <Field
            label="Телефон*"
            inputProps={{
              value: values.telephone,
              onChange: (e) =>
                onChange({ ...values, telephone: e.currentTarget.value }),
            }}
            errorText={errors?.telephone}
            isError={!!errors?.telephone}
          />
          <Field
            label="Email"
            inputProps={{
              value: values.email,
              onChange: (e) =>
                onChange({ ...values, email: e.currentTarget.value }),
            }}
            errorText={errors?.email}
            isError={!!errors?.email}
          />
        </div>
      </OrderForm>
    </div>
  );
};
