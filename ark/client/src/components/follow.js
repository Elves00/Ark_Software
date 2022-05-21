import React, { useState} from "react";
import { NavLink} from "react-router-dom";
import axios from "axios";
import "./user.css";

const Follow = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [retrievedUser, setRetrievedUser] = useState({
    postImage: { myFile: "" },
  });
  const [searched, setSearched] = useState("");
  const [following, setFollow] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };

  async function searchHandler(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/follow/${user}`);
      setRetrievedUser(data.data);
      setFollow(data.data._id);
      setSearched(true);
    } catch (error) {
      setError("Username does not exist!");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  function getPhotoString() {
    return retrievedUser.postImage.myFile
  }  

  async function handleFollow() {
    try {
      if(following !== ""){
        // console.log(following);
        await axios.patch("/editProfile", {$push: {following}}, config);
        alert("Following");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function showFollowing(){
    var followingList = [];
    for (var i = 0; i < 10; i++) {
      followingList.push(<p class="text-center">{retrievedUser.following[i]}</p>);
    }
    return followingList;       
  }

  function showProfile(){

    if (searched === true){
      return(<div className="FullProfile">
      <div class="row">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4">
              <h2 class="h2">{retrievedUser.username}</h2>
              <br/>
              <img class="col-md-10"
                src= {getPhotoString()}
                alt = "ProfilePhoto"
                />         
                
            </div>

            <div class="col-md-8">
              <h2 class="h2">Character Information</h2>
              <p style={{textAlign: "left"}}>Class: {retrievedUser.characterClass}</p>
              {/* <p>Skills: {data.skills}</p>
                <p>Builds: {data.builds}</p> */}
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-10">
              <h2 class="h2">About Me</h2>
              <p style={{textAlign: "left"}}>{retrievedUser.aboutMe}</p>
            </div>
          </div>
        </div>
        <div class="col-md-2">
        <button onClick={handleFollow} className="follow-button">
            Follow {retrievedUser.username}
          </button>
          <h2 class="text-center">Following</h2>
          {showFollowing()}
        </div>
      </div>
    </div>)
    }
   
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
      <br />
      <div className="result">
        {showProfile()}
      </div>
    </div>
  );
};

export default Follow;
