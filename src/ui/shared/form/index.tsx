import './index.less';

interface FormProps {
  actions: JSX.Element;
  body: JSX.Element;
  formProps?: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
}

export const Form = ({ actions, body, formProps }: FormProps) => {
  return (
    <form className="form" {...formProps}>
      <div className="form__body">{body}</div>
      <div className="form__actions">{actions}</div>
    </form>
  );
};
