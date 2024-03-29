import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";
import picture from "./defaultPicture";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const [postImage] = useState({myFile: picture, });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  });
  
  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/register",
        { username, email, password, confirmpassword, postImage },
        config
      );
      alert("Account successfully made!");
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      // console.log(error.response.data);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  return (
    <div className="form">
      <h3 className="account-form-h3">Register</h3>
      {error && <span className="error-message">{error}</span>}
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

        <button type="submit" className="account-form-button">Register</button>
        <br />
        <span className="account-form-span">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </span>
      </form>
      </div>
  );
};

export default Register;
