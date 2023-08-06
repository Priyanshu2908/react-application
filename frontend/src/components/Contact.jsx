import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Contact = () => {

  // initializing formik
  const ContactForm = useFormik({
    initialValues: {
      email: '',
      Phone : '',
      Message:''
    },

    onSubmit: (values) => {
      console.log(values);
      // submit values to the backend
    },

    validationSchema: ContactSchema
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className ="text-center my-5">Contact Form</h2>
          <form onSubmit={ContactForm.handleSubmit}>
            <label htmlFor="">Email</label>
            <p>{ContactForm.errors.email}</p>
            
            <input className="form-control mb-4 rounded-5" type="email" name="email" onChange={ContactForm.handleChange} value={ContactForm.values.email} />
            <label htmlFor="">Phone</label>
            <input className="form-control mb-4 rounded-5" type="Phone" name="Phone" onChange={ContactForm.handleChange} value={ContactForm.values.Phone} />
            <label htmlFor="">Mesage</label>
            <textarea className="form-control mb-4 rounded-5" type="text" name="Message" onChange={ContactForm.handleChange} value={ContactForm.values.Message} />
            <button type="submit" className="btn btn-danger w-100 mt-4 rounded-5">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;