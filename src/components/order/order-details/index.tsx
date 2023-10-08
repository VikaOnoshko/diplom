import { useFormik } from 'formik';

import { OrderRecipient } from '@components/order/order-recipient';
import { OrderSender } from '@components/order/order-sender';
import { OrderDelivery } from '@components/order/order-delivery';
import './index.less';
import { orderValidate } from '../order-validate';
import { useAppSelector } from '@redux/store/store';
import { useDispatch } from 'react-redux';
import { setIsValidOrder, setOrder } from '@redux/reducers/order.reducer';
import { useEffect } from 'react';

export const OrderDetails = () => {
  const order = useAppSelector((state) => state.order.value);

  const dispatch = useDispatch();

  const formik = useFormik<Order>({
    initialValues: order,
    isInitialValid: false,
    onSubmit: () => {},
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: orderValidate,
  });

  const handleChange = (value: Order) => {
    formik.setValues(value);
    dispatch(setOrder(value));
  };

  useEffect(() => {
    dispatch(setIsValidOrder(formik.isValid));
  }, [formik.isValid]);

  return (
    <div className="order-details" onBlur={formik.handleBlur}>
      <OrderRecipient
        values={formik.values.recipient}
        errors={formik.errors.recipient}
        onChange={(value: Order['recipient']) =>
          handleChange({ ...formik.values, recipient: value })
        }
      />
      <OrderSender
        values={formik.values.sender}
        errors={formik.errors.sender}
        onChange={(value: Order['sender']) =>
          handleChange({ ...formik.values, sender: value })
        }
      />
      <OrderDelivery
        values={formik.values.delivery}
        onChange={(value: Order['delivery']) =>
          handleChange({ ...formik.values, delivery: value })
        }
      />
    </div>
  );
};
