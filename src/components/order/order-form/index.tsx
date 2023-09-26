import './index.less';

type Props = {
  title: string;
} & WithChildren;

export const OrderForm = ({ title, children }: Props) => {
  return (
    <>
      <div className="order-form">
        <div className="order-form__container">
          <div className="order-form__wrapper">
            <div className="order-form__header">
              <div className="order-form__title">
                <h4>{title}</h4>
              </div>
            </div>
            <div className="order-form__body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
