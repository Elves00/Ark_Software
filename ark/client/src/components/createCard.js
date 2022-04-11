import React, { useState } from "react";
import axios from "axios";
import "./user.css";

//Function to create a card 
const CreateCard = ({ history }) => {
  const [name, setname] = useState("");
  const [count, setcount] = useState(0);

  const [error, setError] = useState("");

  
  const registerHandler = async (e) => {
    e.preventDefault();
    

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "http://localhost:5000/createCard",
        {name, count},
        config
      );
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    
  };

  return (
    <div className="form">
      <h3>Register</h3>
      {error && <span>{error}</span>}
      <form onSubmit={registerHandler}>
        <input
          type="text"
          id="name"
          placeholder="name"
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          type="number"
          id="count"
          placeholder=""
          required
          value={count}
          onChange={(e) => setcount(e.target.value)}
        />

    

        <button type="submit">New Card</button>
        <br />
    
      </form>
    </div>
  );
};

export default CreateCard;
