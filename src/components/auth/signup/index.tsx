import { useFormik } from 'formik';
import { Field } from '@ui/shared/field';
import { Form } from '@ui/shared/form';
import { Button } from '@ui/shared/button';
import { signupSchema } from '@components/auth/shema';

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            label="Имя"
            type="string"
            isError={!!(formik.errors.firstName && formik.values.firstName)}
            errorText={formik.errors.firstName}
            inputProps={{
              name: 'firstName',
              value: formik.values.firstName,
              onChange: formik.handleChange,
            }}
          />

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
          <Button text="Отправить" />
        </>
      }
    />
  );
};
