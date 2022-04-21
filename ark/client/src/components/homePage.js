import "./homePage.css"
import React, { useEffect, useState } from "react";
import Card from "./homeCard";
import CreateCard from "./createCard";
import axios from "axios";



export default function HomePage() {

    //The state width and how to set it plus intial condition
    const [width, setWidth] = useState(window.innerWidth);

    //useState sets the function state
    const [cards, setCards] = useState([]);



    //Use effect re-sets the width state every time there is a window event
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);
    

    //My attempt of understanding use effect to constantly update
    useEffect(()=> {
        //calls get using the fetchcard path
        axios.get('http://localhost:fetchCard/')
            //Response is used to set the cards dat
            .then(res => {
                const cards = res.json();
                this.setCards(cards);
            })
            //Catch errors 
            .catch(function (error) {
                console.log(error);
            })
    });



    function displayhomeCard() {
        //Map all response to new Cards
        return cards.map((res) => {
            return (
                <Card name={res.name} date="7/04/2022" ></Card>

            );
        });
    };

    return (

        <div className="container">

            {/*Display popular raid cards here */}
            <h2 className="Title" >Popular Raids</h2>
            <div className="grid-container-raids">
                <Card name="Guardian Raid" date="7/04/2022" />
            </div>
            <h2 className="Title" >Popular Pages</h2>
            <div className="grid-container-raids">
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                {/*Trying to get this to use a get command to search databse and return lots of cards */}
                {displayhomeCard()}
            </div>

            {/*Width is the state*/}
            <p>Screen width:{width} </p>
            {/*Temporary create card*/}
            <CreateCard></CreateCard>
            <p>HELLO {cards.length} HEllO</p>
        </div>
    );
}

