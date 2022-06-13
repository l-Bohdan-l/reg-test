/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { Formik, Form, Field } from 'formik';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  // eslint-disable-next-line consistent-return
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        console.log(email);
        return setEmail(value);
      case 'password':
        console.log(password);
        return setPassword(value);
      default:
    }
  };

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Field name="email" type="email" placeholder="Email" onChange={handleChange} />
        <Field name="password" type="password" placeholder="Password" onChange={handleChange} />
      </Form>
    </Formik>
  );
}
