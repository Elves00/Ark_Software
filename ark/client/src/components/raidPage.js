//This function needs to be called Raid for the navbar to link to it.
import React, { useEffect, useState } from "react";
import axios from "axios";




export default function Raid() {

  //Sets the name
  const [name, setView] = useState("MILO");


  useEffect(() => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };


    try {
      axios.post("http://localhost:5000/hit",
        //The name is used to identify the page to increment
        { name },
        config
      )
    } catch (error) {

    }

  }, []);


  return (
    <div className="App" >
      <header className="App-header">
        <p >
          RAIDS Page
        </p>
       

      </header>
    </div>
  );
}
