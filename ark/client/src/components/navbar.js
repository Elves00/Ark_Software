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
    //Colour of Navbar
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      {/*Logo*/}
      <NavLink className="navbar-brand" to="/"><img src={card} alt="Avatar" style={{ "width": 25 + '%' }} /></NavLink>
      {/*I think this is the hamburger menu*/}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      {/*Everything that goes in this div, will collaspe into the navbar menu */}
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          {/*Makes current page nav-link highlighted*/}
          <li class="nav-item active">
            <span class="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/raidPage">Raids</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/bossPage">Bosses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/forumPage">Forum</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chatPage">Chat</NavLink>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/accountPage">Account</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
