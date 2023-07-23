import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = () => {

  // initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      Phone : '',
      Message:''
    },

    onSubmit: (values) => {
      console.log(values);
      // submit values to the backend
    },

    validationSchema: loginSchema
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Login Form</h2>
          <form onSubmit={loginForm.handleSubmit}>
            <label htmlFor="">Email</label>
            <p>{loginForm.errors.email}</p>
            
            <input className="form-control mb-4 rounded-5" type="email" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
            <label htmlFor="">Phone</label>
            <input className="form-control mb-4 rounded-5" type="Phone" name="Phone" onChange={loginForm.handleChange} value={loginForm.values.Phone} />
            <label htmlFor="">Mesage</label>
            <textarea className="form-control mb-4 rounded-5" type="text" name="Message" onChange={loginForm.handleChange} value={loginForm.values.Message} />
            <button type="submit" className="btn btn-danger w-100 mt-4 rounded-5">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;