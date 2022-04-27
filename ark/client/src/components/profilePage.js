import React, { useEffect, useState } from "react";
import axios from "axios";

var currentUser = 'reebecca'; //Later this will become a check with database if someone is signed in


export default function Profile() {

    //Copy Brecon
    const[user, setUser] = useState();

    //Copy Brecon
    useEffect(() => {
        axios.get('http://localhost:5000/fetchUser')
            //Response is used to set the cards dat
            .then((response) => {
                setUser(response.data);
            });
    }, []);

    //These functions aren't great as they actually go through every user, but maybe if I make the get only get the current user.
    function displayUsername() {
        return user?.map((res) => {
            if (res.username === currentUser) {
                return res.username
            }
            return ''              
        });
    };

    function displayClass() {
        return user?.map((res) => {
            if (res.username === currentUser) {
                return res.characterClass
            }
            return ''
        });
    };

    function displaySkills() {
        return user?.map((res) => {
            if (res.username === currentUser) {
                return res.skills
            }
            return ''
        });
    };

    function displayBuilds() {
        return user?.map((res) => {
            if (res.username === currentUser) {
                return res.builds
            }
            return ''
        });
    };

    function displayProfilePhoto() {
        return user?.map((res) => {
            if (res.username === currentUser) {
                return (<img 
                    src= {res.profilePhoto}
                    alt="new"
                    />)
            }
            return ''
        });
    };

    function displayAboutMe() {
        return user?.map((res) => {
            if (res.username === currentUser) {
                return res.aboutMe
            }
            return ''
        });
    };

    return (

<div className="FullProfile">
          <div class="row">
            <div class="col-md-10">
                <div class="row">
                <div class="col-md-4"><h2>{displayUsername()}</h2><p>{displayProfilePhoto()}</p></div>
                <div class="col-md-8"><h2>Character Information</h2><p>Class: {displayClass()}</p>
                <p>Skills: {displaySkills()}</p>
                <p>Builds: {displayBuilds()}</p></div>
                </div>
                <div class="row">
                <div class="col-md-10"><h2>About Me</h2><p>{displayAboutMe()}</p></div>
            </div> 
            </div>
            <div class="col-md-2">
            <h2 class="text-center">Friends</h2>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            <p class="text-center">Friends</p>
            </div>
            </div>    
      </div>
    );
}