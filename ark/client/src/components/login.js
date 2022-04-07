import React from "react";
import Input from "./input";

function login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="Submit">Login</button>
    </form>
  );
}

export default login;
