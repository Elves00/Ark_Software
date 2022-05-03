import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Profile = () => {
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [skills, setSkills] = useState("");
  const [builds, setBuilds] = useState("");
  // const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // This gets the logged in users details
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
      } catch (error) {
        localStorage.removeItem("authToken");
        alert("Please login to view your profile, redirecting to login page");
        setTimeout(() => {
          navigate("/login");
        }, 0);
      }
    };

    fetchPrivateData();
  });

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

  const editAboutMe = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      await axios.patch("/editProfile", { aboutMe, skills }, config);
      alert("Changes saved!");
      navigate("/profilePage");
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

        <button type="submit">Save Changes</button>
        <br />
      </form>

      <h3>Edit About Me</h3>
      {error && <span className="error-message">{error}</span>}
      <form onSubmit={editAboutMe}>
        <input
          type="text"
          id="skills"
          value={data.skills}
          required
          onChange={(e) => setSkills(e.target.value)}
        />
        <input
          type="text"
          id="aboutme"
          value={data.aboutMe}
          required
          onChange={(e) => setAboutMe(e.target.value)}
        />

        <button type="submit">Save About</button>
        <br />
      </form>
    </div>

    
  );
};

export default Profile;
