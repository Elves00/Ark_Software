import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try{
      await axios.post(
        "http://localhost:5000/login",
        {email, password}, 
        config
        );
      alert("Login successful!");
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
      <h3>Login</h3>
      {error && <span>{error}</span>}
      <form onSubmit={loginHandler}>
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

        <button type="submit">Login</button>
        <br />
        <span>
          Don't have an account? <NavLink to="/register">Register</NavLink>
        </span>
      </form>
    </div>
  );
};

export default Login;
