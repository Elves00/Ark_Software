import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import "./editProfile.css";

const Profile = () => {
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [postImage, setPostImage] = useState({myFile: "", });

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

  //For images
  const handleSubmit = (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    e.preventDefault();
    axios.patch("/editProfile", { postImage }, config);
    alert("Changes saved!");
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
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
      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />

        <button>Submit</button>
      </form>
    </div>
    </div>

    
    
  );
};

export default Profile;
