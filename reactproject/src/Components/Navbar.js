
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.user?.name);


  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/login');
  };


  return (
    <>
      <nav className="container-fluid navbar navbar-expand-lg bg-dark">
        <Link className="navbar-brand ms-4 fs-1 text-warning" to="/">
          MOVIES
        </Link>
        <button className="navbar-toggler bg-danger me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-info fs-5" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info fs-5" to="/favorites">
                WishList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info fs-5" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link text-info fs-5">
                   {userName}!
                </span>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger text-white" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-info fs-5" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info fs-5" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
