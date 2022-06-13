/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Неправильный email')
    .matches(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      'Неправильный email',
    )
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать 6 или более символов')
    .max(16, 'Пароль должен содержать не более 16 символов')
    .required('Обязательное поле'),
});
