import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to="/">HBH</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">My Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/createevent">Create Event</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/advancedsearch">Advanced Search</Link>
              </li>
            </ul>
          </div>
        </nav> 
        )
    
}

export default NavBar;