//This function needs to be called Raid for the navbar to link to it.
import React, { useState, useEffect } from 'react';
import RefactoredBossCard from './refactored-boss-card/BossCard';
import Tabs from './Tabs';
import axios from 'axios';
import Card from './front-page/homeCard';
import './bossPage.css';


export default function Raid() {

    //useState sets the function state s
    const [name, setName] = useState("demon-beast-canyon");
    const [card, setCards] = useState([]);

    useEffect(() => {
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        try {
            axios.post("http://localhost:5000/findRaid",
                //The name is used to identify the page to increments
                { name },
                config

            )
                .then((res) => {
                    setCards(res.data);
                    console.log("Here");
                    console.log(res.data);
                });

        } catch (error) {
            console.log(error)
        }
    }, []);

    function oneCard(){
         //Map all response to new Cards
         return card.map((res) => {
            return (
                <Card path={res.path} src={res.image} name={res.name} tag={res.tag}  ></Card>
            );
        });
    }

    return (
        <>
            <h1 className='h1'>Raids</h1>
            <div className='search__container'>
                <form className='search__form'>
                    <label for="search" >Search: </label>
                    <input id="search" className='search' type="text" placeholder="..."></input>
                </form>
            </div>
            <Tabs
                children={[
                    {
                        props: { label: 'Tier 1' }
                    },
                    {
                        props: { label: 'Tier 2' }
                    },
                    {
                        props: { label: 'Tier 3' }
                    },
                    {
                        props: { label: 'Tier 5' }
                    },
                    {
                        props: { label: 'Tier 6' }
                    },
                    {
                        props: { label: 'Tier 7' }
                    }
                ]}
            />

            <div className="cards">
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <div className="cards__items">
                            {oneCard()}
                            <RefactoredBossCard
                                src="Lost-Ark-Images/icy_legoros.jpg"
                                text="Icy Legoros"
                                label="Raid"
                                path="/demon-beast-canyon"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/urnil.jpg"
                                text="Ur'nil"
                                label="Raid"
                                path="/demon-beast-canyon"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/vertus.jpg"
                                text="Vertus"
                                label="Raid"
                                path="/demon-beast-canyon"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Necromancer's Origin"
                                label="Dungeon"
                                path="/demon-beast-canyon"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
