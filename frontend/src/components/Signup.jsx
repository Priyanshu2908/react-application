import React from "react";

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Signup Form</h2>
          <form>
            <label htmlFor="">Name</label>
            <input className="form-control mb-4 rounded-5" type="text" />
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-5" type="email" />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-5" type="password" />
            <button className="btn btn-danger w-100 mt-4 rounded-5">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;