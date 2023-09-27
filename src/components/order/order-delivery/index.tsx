import { Field } from '@ui/shared/field';
import { OrderForm } from '../order-form';
import { CheckBox } from '@ui/shared/checkbox';
import './index.less';
import { useAppDispath } from '@redux/store/store';
import { setPostCard, setPtoto, setVase } from '@redux/reducers/cart.reducer';

type Props = {
  values: Order['delivery'];
  onChange: (values: Order['delivery']) => void;
};

export const OrderDelivery = ({ values, onChange }: Props) => {
  const dispatch = useAppDispath();

  return (
    <div className="order-delivery">
      <OrderForm title="3. Детали доставки">
        <div className="order-delivery__options">
          <CheckBox
            value={values.isSurprice}
            label="Доставка сюрпризом"
            onChange={(value) => {
              onChange({ ...values, isSurprice: value });
            }}
            className="order-delivery__checkbox"
          />
          <CheckBox
            value={values.isPhoto}
            label="Фотоотчет (+ 10 BYN)"
            onChange={(value) => {
              onChange({ ...values, isPhoto: value });
              dispatch(setPtoto(value ? 10 : null));
            }}
            className="order-delivery__checkbox"
          />
          <CheckBox
            value={values.isVase}
            label="Добавить вазу (+ 50 BYN)"
            onChange={(value) => {
              onChange({ ...values, isVase: value });
              dispatch(setVase(value ? 50 : null));
            }}
            className="order-delivery__checkbox"
          />
          <CheckBox
            value={values.isNotify}
            label="Напомнить о событии"
            onChange={(value) => {
              onChange({ ...values, isNotify: value });
            }}
            className="order-delivery__checkbox"
          />
          <CheckBox
            value={values.isPostcard}
            label="Открытка"
            onChange={() => {}}
            className="order-delivery__checkbox"
          />
          <CheckBox
            value={values.isBusinessCard}
            label="Визитка"
            className="order-delivery__checkbox order-delivery__checkbox_dependent"
            onChange={(value) => {
              const isPostcard = value || values.isPayPostcard;

              onChange({ ...values, isBusinessCard: value, isPostcard });
            }}
          />
          <CheckBox
            value={values.isPayPostcard}
            label="Полномасштабная открытка (+ 20 BYN)"
            onChange={(value) => {
              const isPostcard = value || values.isBusinessCard;

              onChange({ ...values, isPayPostcard: value, isPostcard });

              dispatch(setPostCard(value ? 20 : null));
            }}
            className="order-delivery__checkbox order-delivery__checkbox_dependent"
          />
        </div>
        <div>
          <Field
            label="Повод для открытки"
            inputProps={{
              value: values.postcardType,
              onChange: (e) =>
                onChange({ ...values, postcardType: e.currentTarget.value }),
            }}
          />
          <Field
            label="Текст открытки"
            inputProps={{
              value: values.postcardText,
              placeholder: 'до 70 символов',
              onChange: (e) =>
                onChange({ ...values, postcardText: e.currentTarget.value }),
            }}
          />
        </div>
      </OrderForm>
    </div>
  );
};
