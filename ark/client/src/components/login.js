import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  });

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post("/login", { email, password }, config);
      localStorage.setItem("authToken", data.token);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="form">
      <h3 className="account-form-h3">Login</h3>
      {error && <span className="error-message">{error}</span>}
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

        <button type="submit" className="account-form-button">Login</button>
        <br />
        <span className="account-form-span">
          Don't have an account? <NavLink className="form-link" to="/register">Register</NavLink>
        </span>
      </form>
    </div>
  );
};

export default Login;
