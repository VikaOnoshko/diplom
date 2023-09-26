import { Field } from '@ui/shared/field';
import { OrderForm } from '../order-form';
import './index.less';

type Props = {
  values: Order['sender'];
  onChange: (values: Order['sender']) => void;
};

export const OrderSender = ({ values, onChange }: Props) => {
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
          />
          <Field
            label="Телефон*"
            inputProps={{
              value: values.telephone,
              onChange: (e) =>
                onChange({ ...values, telephone: e.currentTarget.value }),
            }}
          />
          <Field
            label="Email"
            inputProps={{
              value: values.email,
              onChange: (e) =>
                onChange({ ...values, email: e.currentTarget.value }),
            }}
          />
        </div>
      </OrderForm>
    </div>
  );
};
