import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const roles = [
  'DPS',
  'healer',
  'tank',
  'heart',
  'buttmonkey',
  'comic relief',
  'the straight man',
  'mook'
];

const Basic = ({ touched, errors }) => {
  return (
    <Form>
      <div>
        <Field type='text' name='name' placeholder='name' />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <Field type='text' name='role' placeholder='role' />
        {touched.role && errors.role && <p>{errors.role}</p>}
      </div>
      <button type='submit'>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: '',
      role: props.role || '',
      subFun: props.subFun
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup
      .string()
      .min(1, "name can't be empty")
      .required(),
    role: Yup
      .string()
      .oneOf(roles, 'valid roles are: ' + String(roles))
      .required('role required')
  }),

  handleSubmit(vals, { resetForm }) {
    vals.subFun(vals);
    resetForm();
  }
})(Basic);