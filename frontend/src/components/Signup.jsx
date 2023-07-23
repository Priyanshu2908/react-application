import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {

  // initializing formik
  const SignupForm = useFormik({
    initialValues: {
      email: '',
      password : ''
    },

    onSubmit: (values) => {
      console.log(values);
      // submit values to the backend
    },

    validationSchema: SignupSchema
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Signup Form</h2>
          <form onSubmit={SignupForm.handleSubmit}>
            <label htmlFor="">Email</label>
            <p>{SignupForm.errors.email}</p>
            
            <input className="form-control mb-4 rounded-5" type="email" name="email" onChange={SignupForm.handleChange} value={SignupForm.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-5" type="password" name="password" onChange={SignupForm.handleChange} value={SignupForm.values.password} />
            <button type="submit" className="btn btn-danger w-100 mt-4 rounded-5">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;