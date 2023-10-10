import * as Yup from 'yup';

export const orderValidate = Yup.object<Order>().shape({
  recipient: Yup.object().shape({
    name: Yup.string().required('Поле обязательно'),
    telephone: Yup.string()
      .required('Поле обязательно')
      .matches(
        /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/i,
        'Неверный телефон',
      ),
    date: Yup.date().min(new Date(), 'Некорректная дата'),
    region: Yup.string().required('Поле обязательно'),
    adress: Yup.string().required('Поле обязательно'),
  }),

  sender: Yup.object().shape({
    name: Yup.string().required('Поле обязательно'),
    telephone: Yup.string()
      .required('Поле обязательно')
      .matches(
        /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/i,
        'Неверный телефон',
      ),
  }),
});
