import "./homePage.css"
import React, { useEffect, useState } from "react";
import dungeonCard from "./dungeonCard";
import CreateCard from "./createCard";
import axios from "axios";



export default function HomePage() {


    //useState sets the function state
    const [cards, setCards] = useState([]);


    //My attempt of understanding use effect to constantly update
    useEffect(() => {
        //calls get using the fetchcard path
        axios.get('http://localhost:5000/fetchCard')
            //Response is used to set the cards dat
            .then((res) => {
                setCards(res.data);
            });
    }, []);


    function displayhomeCard() {
        //Map all response to new Cards
        return cards.map((res) => {
            return (
                //Want to figure out how querying works ie if there is a document inside of a document can we query with name.document.conent
                <dungeonCard name={res.name} content={res.content} date="7/04/2022" >
                </dungeonCard>
            );
        });

    };

    return (

        <div className="container">
            {/* Populate the page with content stored on the database */}
            {displayhomeCard()}
            <div className="footer">a</div>

        </div>
    );
}

