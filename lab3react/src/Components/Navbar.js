// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const favoritesCount = useSelector(state => state.fav.favorites.length);

  return (
    <>
      <nav className="container-fluid navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand ms-4 fs-1 text-warning" to="#">MOVIES</a>
        <button className="navbar-toggler bg-danger me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-info fs-5" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info fs-5" to="/favorites">
                Favorites ({favoritesCount})
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-info fs-5" to="/login">login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info fs-5" to="/register">register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
