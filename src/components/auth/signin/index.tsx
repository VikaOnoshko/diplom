import { useFormik } from 'formik';
import { Field } from '@ui/shared/field';
import { Form } from '@ui/shared/form';
import { Button } from '@ui/shared/button';
import { signinSchema } from '@components/auth/shema';
import { useContext } from 'react';
import { UserContext } from '@components/user';
import './index.less';
import { signin } from '../../../firebase';

type SigninFormProps = { goToSignup: () => void };

export const SigninForm = ({ goToSignup }: SigninFormProps) => {
  const UserContextData = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('onSubmit');

      signin(values.email, values.password);

      alert(JSON.stringify(values, null, 2));
      UserContextData.login(values.email, values.password);
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
