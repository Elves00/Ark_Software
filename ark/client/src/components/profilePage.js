import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
import "./profilePage.css";

export default function Profile() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };

  useEffect(() => {
    const fetchPrivateData = async () => {
      try {
        const { data } = await axios.get("/profilePage", config);
        setData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Not authorized, please login, redirecting to login page...");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    };

    fetchPrivateData();
  });

  function handleDelete() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this account?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                handleClickDelete();
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
    });
  }

  async function handleClickDelete() {
    try {
      await axios.delete("/deleteProfile", config);
    } catch (error) {
      console.log(error);
    }
  }

  return error ? (
    error
  ) : (
    <div className="FullProfile">
      <div class="row">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4">
              <h2 class="h2">{data.username}</h2>
              {/* <p>
                <img 
                    src= {data.profilePhoto}
                    alt="new"
                    /></p> */}
            </div>

            <div class="col-md-8">
              <h2 class="h2">Character Information</h2>
              <p>Class: {data.characterClass}</p>
              {/* <p>Skills: {data.skills}</p>
                <p>Builds: {data.builds}</p> */}
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
              <h2 class="h2">About Me</h2>
              <p>{data.aboutMe}</p>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div className="editprofile-button">
            <NavLink className="edit-link" to="/editProfile">
              Edit Profile
            </NavLink>
          </div>
          <button onClick={handleDelete} className="delete-button">
            Delete Account
          </button>
          {/* <h2 class="text-center">Friends</h2>

            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p> */}
        </div>
      </div>
    </div>
  );
}
