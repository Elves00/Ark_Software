import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
//Import image
import card from '../logo192.png'
// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink  className="nav-link" to="/">
          <img src={card} alt="Avatar" style={{ "width": 25 + '%' }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <NavLink className="nav-link" to="/raidPage">
                Raids
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bossPage">
                Bosses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/forumPage">
                Forum
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chatPage">
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/accountPage">
                Account
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}
