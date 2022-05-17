import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [retrievedUser, setRetrievedUser] = useState("");
  // const navigate = useNavigate();

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  //   },
  // };

  //   useEffect(() => {
  //     const fetchPrivateData = async () => {
  //       try {
  //         // setData(data.data);
  //       } catch (error) {
  //         localStorage.removeItem("authToken");
  //         setError("Not authorized, please login, redirecting to login page...");
  //         setTimeout(() => {
  //           navigate("/login");
  //         }, 1000);
  //       }
  //     };

  //     fetchPrivateData();
  //   });

  const searchHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/follow/${user}`);
      console.log(data.data);
      setRetrievedUser(data.data);
    } catch (error) {
      setError("Username does not exist!");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="form">
      <h3 className="account-form-h3">Find a user</h3>
      {error && <span className="error-message">{error}</span>}
      <form onSubmit={searchHandler}>
        <div className="forminput">
          <input
            type="text"
            id="user"
            placeholder="Enter username"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <button type="submit" className="account-form-button">
          Search
        </button>
        <div className="redirect">
          <NavLink to="/profilePage">Back to Profile</NavLink>
        </div>
        <br />
      </form>
      <div className="result">
        {retrievedUser.username}
        {retrievedUser.characterClass}
        {retrievedUser.aboutMe}
      </div>
    </div>
  );
};

export default Login;
