import { useFormik } from 'formik';
import { Field } from '@ui/shared/field';
import { Form } from '@ui/shared/form';
import { Button } from '@ui/shared/button';
import { signinSchema } from '@components/auth/shema';
import './index.less';
import { signin } from '../../../firebase';
import { login } from '@redux/reducers/userReducer';
import { useAppDispath } from '@redux/store/store';

type SigninFormProps = { goToSignup: () => void };

export const SigninForm = ({ goToSignup }: SigninFormProps) => {
  const dispatch = useAppDispath();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      signin(values.email, values.password)
        .then((data) => {
          dispatch(login(data));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: signinSchema,
  });

  return (
    <Form
      formProps={{
        onSubmit: formik.handleSubmit,
        noValidate: true,
      }}
      body={
        <>
          <Field
            label="Электронная почта"
            type="email"
            isError={!!formik.errors.email}
            errorText={formik.errors.email}
            inputProps={{
              name: 'email',
              value: formik.values.email,
              onChange: formik.handleChange,
            }}
          />

          <Field
            label="Пароль"
            type="password"
            isError={!!formik.errors.password}
            errorText={formik.errors.password}
            inputProps={{
              name: 'password',
              value: formik.values.password,
              onChange: formik.handleChange,
            }}
          />
        </>
      }
      actions={
        <>
          <Button text="Войти" type="submit" />
          <div className="sigin__change-form" onClick={goToSignup}>
            <span>Регистрация</span>
          </div>
        </>
      }
    />
  );
};
