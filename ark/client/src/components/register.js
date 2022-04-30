import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      //if confirm pass and pass do not match, reset both fields
      setPassword("");
      setConfirmpassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return alert("Confirm password did not match!");
    }

    try {
      await axios.post(
        "http://localhost:5000/register",
        { username, email, password },
        config
      );
      alert("Account successfully made!");
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="form">
      <h3>Register</h3>
      {error && <span>{error}</span>}
      <form onSubmit={registerHandler}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          id="confirmpassword"
          placeholder="Confirm Password"
          required
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />

        <button type="submit">Register</button>
        <br />
        <span>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </span>
      </form>
    </div>
  );
};

export default Register;
