import React from "react";
import Input from "./input";
import "./user.css";

function login() {
  return (
    <div className="form">
      <h3>Login</h3>
      <form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="Submit">Login</button>
      </form>
    </div>
  );
}

export default login;
