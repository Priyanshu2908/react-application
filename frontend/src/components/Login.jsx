import { useFormik } from "formik";
import React from "react";

const Login = () => {

  // initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password : ''
    },

    onSubmit: (values) => {
      console.log(values);
      // submit values to the backend
    }
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Login Form</h2>
          <form onSubmit={loginForm.handleSubmit}>
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-5" type="email" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-5" type="password" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />
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