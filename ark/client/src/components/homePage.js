import "./homePage.css"
import React, { useEffect, useState } from "react";
import Card from "./homeCard2";
import CreateCard from "./createCard";
import axios from "axios";
import './homeCard2.css';



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
                <Card path="bossPage" src={res.image} name={res.name} tag={res.tag} date="7/04/2022" ></Card>
            );
        });

    };

    return (

        <div className="container">
            <div className="top">
                <div className="trial">
                    <h1 className="header">Welcome to Ark</h1>
                </div>
            </div>
            {/*Display popular raid cards here */}
            <h2 className="title" >Featured Page</h2>
            <div className="grid-container-raids">
                <Card src="Lost-Ark-Images/laimage1.jpg"tag= "Dungeon"name="Guardian Raid" date="7/04/2022" />
            </div>
            <h2 className="title" >Popular Pages</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {displayhomeCard()}
                    </ul>
                </div>
            </div>

            {/*Width is the state*/}
            <p>Screen width:{width} </p>
            {/*Temporary create card*/}
            <CreateCard></CreateCard>
            <p>HELLO {cards.length} HEllO</p>
            <div className="footer">a</div>

        


        </div>
    );
}

