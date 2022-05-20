import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

const Follow = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [retrievedUser, setRetrievedUser] = useState({
    postImage: { myFile: "" },
  });
  // const navigate = useNavigate();

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

    useEffect(() => {
      const fetchPrivateData = async () => {
        if(user !== ""){
          try{
            const { data } = await axios.post(`/follow/${user}`);
            console.log(data.data);
            setRetrievedUser(data.data);
          } catch(error){
            setError("Username does not exist!");
            setTimeout(() => {
              setError("");
            }, 3000);
          }
        } else {
          setRetrievedUser("");
        }
      };

      fetchPrivateData();
    });

  const searchHandler = async (e) => {
    e.preventDefault();
    if(user !== ""){
      try{
        const { data } = await axios.post(`/follow/${user}`);
        console.log(data.data);
        setRetrievedUser(data.data);
        } catch(error){
          setError("Username does not exist!");
          setTimeout(() => {
            setError("");
          }, 3000);
        }
    } else {
      setRetrievedUser("");
    }
  };

  function getPhotoString() {
    return retrievedUser.postImage
  }

  return (
    <div className="form">
      <h3 className="account-form-h3">Find a user</h3>
      {error && <span className="error-message">{error}</span>}
      <form onSubmit={searchHandler}>
        <div className="forminput">
          <input
            type="search"
            id="user"
            placeholder="Enter username"
            required
            // value={user}
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
      <img src= {getPhotoString()} alt = "ProfilePhoto"/> 
        {retrievedUser.username}
        {retrievedUser.characterClass}
        {retrievedUser.aboutMe}
      </div>
    </div>
  );
};

export default Follow;
