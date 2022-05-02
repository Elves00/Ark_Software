import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const editHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      await axios.patch("/editProfile", { username }, config);
      alert("Changes saved!");
      navigate("/accountPage");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="form">
      <h3>Edit Details</h3>
      {error && <span className="error-message">{error}</span>}
      <form onSubmit={editHandler}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}

        <button type="submit">Save Changes</button>
        <br />
      </form>
    </div>
  );
};

export default Profile;
