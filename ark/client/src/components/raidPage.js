//This function needs to be called Raid for the navbar to link to it.
import React, { useEffect, useState } from "react";
import axios from "axios";




export default function Raid() {

  //Sets the name
  const [name, setView] = useState("MILO");


  useEffect(() => {
    console.log('MAX')
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
      alert("Account successfully made!");
    } catch (error) {

    }
    console.log("MOTHA FLICKER")

  }, []);

  // //async function to update screen has been viewed
  // const bang = async () => {

  //   console.log('MAX')
  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     axios.post("http://localhost:5000/hit",
  //       //The name is used to identify the page to increment
  //       { name },
  //       config
  //     )
  //     alert("Account successfully made!");
  //   } catch (error) {

  //   }
  //   setView("Set")
  // }

  return (
    <div className="App" >
      <header className="App-header">
        <p >
          RAIDS Page {name}
        </p>
        <button >Bang</button>

      </header>
    </div>
  );
}