/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import { loginSchema } from '../../utils/validationSchema';

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  //   const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       console.log(email);
  //       return setEmail(value);
  //     case 'password':
  //       console.log(password);
  //       return setPassword(value);
  //     default:
  //   }
  // };

  const handleSubmit = (values, { resetForm }) => {
    // eslint-disable-next-line no-console
    console.log(values);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form autoComplete="off">
        <label htmlFor="email">
          Email
          <Field id="email" name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" />
        </label>
        <label htmlFor="password">
          Password
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
