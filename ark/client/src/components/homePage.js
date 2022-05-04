import "./homePage.css"
import React, { useEffect, useState } from "react";
import FeatureCard from "./featureCard"
import Card from "./homeCard";
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
            {/*A featured raid display near the top of the home page*/}
            <h2 className="title" >Featured Page</h2>
            <div className="cards__container">
                <div className="cards__wrapper__feature">
                    <div className="cards__items__feature">
                        <FeatureCard src="Lost-Ark-Images/laimage1.jpg" tag="Dungeon" name="Guardian Raid" date="7/04/2022" />
                    </div>
                </div>
            </div>

            {/*A section containing some of the most popular raids on the page as cards with links to the appropriate pages */}

            <h2 className="title" >Popular Pages</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        {displayhomeCard()}
                    </div>
                </div>
            </div>

            <div className="footer">This website was created by the Ark Project team please enjoy</div>

        </div>
    );
}

