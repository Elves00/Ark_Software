import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Profile = () => {
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/accountPage", config);
        setData(data.data);
        // setUsername(data.username);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Not authorized, please login");
        setTimeout(() => {
          setError("");
        }, 1000);
        navigate("/login");
      }
    };

    fetchPrivateData();
  });

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    //     try {
    //       await axios.post(
    //         "http://localhost:5000/register",
    //         { username, password },
    //         config
    //       );
    //       alert("Account successfully made!");
    //       navigate("/");
    //     } catch (error) {
    //       setError(error.response.data.error);
    //       setTimeout(() => {
    //         setError("");
    //       }, 5000);
    //     }
  };

  return (
    <div className="form">
      <h3>Edit Details</h3>
      {error && <span>{error}</span>}
      <form onSubmit={registerHandler}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          required
          value={data.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Save Changes</button>
        <br />
      </form>
    </div>
  );
};

export default Profile;
