import * as Yup from 'yup';

//eslint-disable-next-line

export const signinSchema = Yup.object().shape({
  email: Yup.string()
    .required('Поле обязательно')
    .matches(
      /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i,
      'Электранная почта неправильная',
    ),
  password: Yup.string()
    .required('Поле обязательно')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
      'Некорректный формат',
    ),
});

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Поле обязательно')
    .min(6, 'Имя должно содержать минимум 3 символа')
    .max(20, 'Имя должно содержать максимум 10 символов'),

  email: Yup.string()
    .required('Поле обязательно')
    .matches(
      /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i,
      'Электронная почта неправильная',
    ),

  password: Yup.string()
    .required('Поле обязательно')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
      'Некорректный формат',
    ),

  repeatPassword: Yup.string()
    .required('Поле обязательно')
    .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
});
