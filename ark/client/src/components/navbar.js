import React from "react";
import './navbar.css'
//This imports the ability for the menu to show up when minimized.
import "bootstrap/dist/js/bootstrap.min.js";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
//Import image
import card from "../logo192.png";
// Here, we display our Navbar

export default function Navbar() {
  return (
    //Colour of Navbar
    <nav className="navbar navbar-expand-lg navbar-custom">
      {/*Logo*/}
      <NavLink className="navbar-brand" to="/"><img src={card} width="50em" height="50em" alt="" /></NavLink>
      {/*Hamburger menu*/}
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon custom-toggler"></span>
      </button>
      {/*Everything that goes in this div, will collaspe into the navbar menu */}
      <div class="navbar-collapse collapse" id="navbarText">
        <ul class="navbar-nav ms-auto">
          {/*Makes current page nav-link highlighted/white text*/}
          <li class="nav-item.active">
            <span class="sr-only">(current)</span>
          </li>
          {/*Menu Items */}
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
        </ul>
        {/*This is so the Account Link is on the right*/}
        <ul class="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            {/* Link goes nowhere, so works like a button, but is NavLink to look like the others */}
            <button className="btn btn-dark dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account
            </button>
            <div class="dropdown-menu dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="nav-item">
            <NavLink className="nav-link" to="/profilePage">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
          </li>
            </div>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

// The below code can be used if we want the navbar to collapse once a link it clicked, but makes full screen navbar 'blink'
// <NavLink className="nav-link" data-toggle="collapse" data-target="#navbarText" to="/raidPage">Raids</NavLink>
