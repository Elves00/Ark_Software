import React from "react";
import Input from "./input";
import "./user.css";

function Register() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="paswword" placeholder="Confirm Password" />
      <button type="Submit">Register</button>
    </form>
  );
}

export default Register;
