import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [data, setData] = useState("");
  // const [password, setPassword] = useState("");

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
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Not authorized, please login, redirecting to login page...");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
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
      if (username === "" && aboutMe === "") {
        await axios.patch("/editProfile", { characterClass }, config);
      } else if (username === "" && characterClass === "") {
        await axios.patch("/editProfile", { aboutMe }, config);
      } else if (aboutMe === "" && characterClass === "") {
        await axios.patch("/editProfile", { username }, config);
      } else if (username === "") {
        await axios.patch("/editProfile", { aboutMe, characterClass }, config);
      } else if (aboutMe === "") {
        await axios.patch("/editProfile", { username, characterClass }, config);
      } else if (characterClass === "") {
        await axios.patch("/editProfile", { username, aboutMe }, config);
      } else {
        await axios.patch(
          "/editProfile",
          { username, aboutMe, characterClass },
          config
        );
      }
      alert("Changes saved!");
      navigate("/profilePage");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return error ? (
    error
  ) : (
    <div className="form">
      <h3>Edit Details</h3>
      {error && <span className="error-message">{error}</span>}
      <form onSubmit={editHandler}>
        Username
        <input
          type="text"
          id="username"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        About Me
        <input
          type="text"
          id="aboutMe"
          defaultValue={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
        />
        Class
        <input
          type="text"
          id="characterClass"
          defaultValue={characterClass}
          onChange={(e) => setCharacterClass(e.target.value)}
        />
        <button type="submit">Save Changes</button>
        <br />
      </form>
    </div>
  );
};

export default Profile;
