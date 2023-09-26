import { useFormik } from 'formik';

import { OrderRecipient } from '@components/order/order-recipient';
import { OrderSender } from '@components/order/order-sender';
import { OrderDelivery } from '@components/order/order-delivery';
import './index.less';

export const OrderDetails = () => {
  const formik = useFormik({
    initialValues: {
      recipient: {
        name: '',
        telephone: '',
        date: null,
        region: '',
        adress: '',
        time: '',
      },
      sender: {
        name: '',
        telephone: '',
        email: '',
      },
      delivery: {
        isSurprice: false,
        isPhoto: false,
        isVase: false,
        isNotify: false,
        isPostcard: false,
        isBusinessCard: false,
        isPayPostcard: false,
        postcardType: '',
        postcardText: '',
      },
    },
    onSubmit: () => {},
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <div className="order-details">
      <OrderRecipient
        values={formik.values.recipient}
        onChange={(value: Order['recipient']) =>
          formik.setValues({ ...formik.values, recipient: value })
        }
      />
      <OrderSender
        values={formik.values.sender}
        onChange={(value: Order['sender']) =>
          formik.setValues({ ...formik.values, sender: value })
        }
      />
      <OrderDelivery
        values={formik.values.delivery}
        onChange={(value: Order['delivery']) =>
          formik.setValues({ ...formik.values, delivery: value })
        }
      />
    </div>
  );
};
