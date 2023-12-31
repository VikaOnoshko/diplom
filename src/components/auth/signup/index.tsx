import { useFormik } from 'formik';
import { Field } from '@ui/shared/field';
import { Form } from '@ui/shared/form';
import { Button } from '@ui/shared/button';
import { signupSchema } from '@components/auth/shema';
import { useAppDispath } from '@redux/store/store';
import { login } from '@redux/reducers/userReducer';
import { AuthService } from '@services/auth.service';

export const SignupForm = () => {
  const dispatch = useAppDispath();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      AuthService.signup(values.email, values.password)
        .then((data) => {
          dispatch(login(data));
        })
        .catch((err) => {
          formik.setErrors(err);
        });
    },
    validationSchema: signupSchema,
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

          <Field
            label="Повторите пароль"
            type="password"
            isError={!!formik.errors.repeatPassword}
            errorText={formik.errors.repeatPassword}
            inputProps={{
              name: 'repeatPassword',
              value: formik.values.repeatPassword,
              onChange: formik.handleChange,
            }}
          />
        </>
      }
      actions={
        <>
          <Button text="Отправить" type="submit" />
        </>
      }
    />
  );
};
