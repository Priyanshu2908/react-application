import React from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "../UserContext";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();

  const showLoginOption = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button onClick={logout} className="btn btn-danger">Logout</button>
        </li>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                Event Handling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/state">
                State Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo">
                Todo App
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/browse">
                Browse Laptops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manageuser">
                Manage Users
              </NavLink>
            </li>

            {showLoginOption()}
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;