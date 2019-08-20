import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Basic = ({ touched, errors }) => {
  return (
    <Form>
      <div>
        <Field type='text' name='username' placeholder='username' />
        {touched.username && errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <Field type='password' name='password' placeholder='password' />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button type='submit'>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      username: '',
      password: '',
      subFun: props.subFun
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup
      .string()
      .min(1, "username can't be empty")
      .required(),
    password: Yup
      .string()
      .min(5, "password needs at least 5 characters")
      .required()
  }),

  handleSubmit(vals, { resetForm }) {
    vals.subFun(vals);
    resetForm();
  }
})(Basic);