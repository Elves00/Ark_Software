import React, { useEffect, useState } from 'react';
import './postcontainer.css';
import BossInfo from '../boss-information/bossInfo';
import axios from "axios";


export default function PostContainer() {
     //Sets the name
  const [name] = useState("demon-beast-canyon");


  useEffect(() => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };


    try {
      axios.post("http://localhost:5000/hit",
        //The name is used to identify the page to increments
        { name },
        config
      )
      // alert("Click!");
    } catch (error) {
      console.log(error)
    }

  });

    return (
        <div className="containers">
            <BossInfo />
        </div>
    );
}
