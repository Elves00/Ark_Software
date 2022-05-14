import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import "./editProfile.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  // const [data, setData] = useState("");

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
        await axios.get("/profilePage", config);
        // setData(data.data);
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
      if (username === "" && aboutMe === "" && characterClass === "") {
        alert("No changes!");
      } else {
        if (username === "" && aboutMe === "") {
          await axios.patch("/editProfile", { characterClass }, config);
        } else if (username === "" && characterClass === "") {
          await axios.patch("/editProfile", { aboutMe }, config);
        } else if (aboutMe === "" && characterClass === "") {
          await axios.patch("/editProfile", { username }, config);
        } else if (username === "") {
          await axios.patch(
            "/editProfile",
            { aboutMe, characterClass },
            config
          );
        } else if (aboutMe === "") {
          await axios.patch(
            "/editProfile",
            { username, characterClass },
            config
          );
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
      }
      navigate("/profilePage");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  return error ? (
    error
  ) : (
    <div>
      <h3 className="editprofile-heading">Edit Details</h3>
      {error && <span className="error-message">{error}</span>}
      <div className="edit-form">
        <form onSubmit={editHandler}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            Value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>About Me</label>
          <div className="aboutme">
            <textarea
              type="text"
              id="aboutMe"
              Value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            ></textarea>
          </div>
          <label>Class</label>
          <input
            type="text"
            id="characterClass"
            Value={characterClass}
            onChange={(e) => setCharacterClass(e.target.value)}
          />
          <br />
          <button type="submit">Save Changes</button>
          <div className="redirect">
            <NavLink to="/profilePage">Back to Profile</NavLink>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Profile;
