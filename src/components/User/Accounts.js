import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./AccountsIndex.css";
const PersonalDetailsForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address:''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  const handleSubmit = (values) => {
    // You can handle form submission here, e.g., sending data to the server.
    console.log('Form values:', values);
  };

  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <Field type="mobile" id="mobile" name="mobile" />
            <ErrorMessage name="mobile" component="div" className="error" />
          </div>
         
          

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalDetailsForm;
