import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bossInfo.css";
import BlockPage from "./page";
export default function BossInfo() {
  //Sets the name
  const [name] = useState("demon-beast-canyon");

  useEffect(() => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      axios.post(
        "http://localhost:5000/hit",
        //The name is used to identify the page to increments
        { name },
        config
      );
      // alert("Click!");
    } catch (error) {
      console.log(error);
    }
  });

  return (

    <BlockPage props={"demon-beast-canyon"}></BlockPage>
   
  );
}
