import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from './Tabs';
import Card from './front-page/homeCard';
import './bossPage.css';

export default function Boss() {

    const tag = 'Dungeon';

    //The cards from the database
    const [card, setCards] = useState([]);

    //Term that we use to search the database  
    const [term, setSearch] = useState("");
    //Current tier 
    const [tier, setTier] = useState(1);


    //All the possible locations
    const [locations, setLocations] = useState([['Ancient Elveria', 'Phantom Palace'], ['Ark of Arrogance', 'Gate of Paradise'], ['Orehas Well']])

    function layoutCards() {
        // console.log(locations[0][0]);

        //for the current one 
        console.log("tier:" + tier)
        return locations[tier - 1].map((name) => {
            return <div>

                <h2>{name}</h2>
                <div className="cards__items">
                    {oneCard({ name })}
                </div>
            </div>;
        })
    }

    useEffect(() => {
      
        //Finds all the raids of the current tier
        console.log("This is the term: " + term)
        console.log("This is the tier: " + tier)
        if (term === '') {
            console.log("Trying to post")
            const config = {
                header: {
                    "Content-Type": "application/json",
                },
            };
            try {
                axios.post("http://localhost:5000/findDungeon",
                    //The name is used to identify the page to increments
                    { tier, tag },
                    config

                )
                    .then((res) => {
                        setCards(res.data);
                        console.log(res.data)
                    });


            } catch (error) {
                console.log(error)
            }
        }
        else {
            console.log("The else stament")
           
            const config = {
                header: {
                    "Content-Type": "application/json",
                },
            };
            try {
                axios.post("http://localhost:5000/searchDungeon",
                    //The name is used to identify the page to increments
                    { term },
                    config

                )
                    .then((res) => {
                        setCards(res.data);
                        console.log(res.data)
                    });


            } catch (error) {
                console.log(error)
            }
        }

        layoutCards();

    }, [term, tier]);

    function oneCard(name) {
        //Map all response to new Cards
        return card.map((res) => {
            let a = Object.values(name)
            if (a == res.location) {
                return (
                    <Card path={res.path} src={res.image} name={res.name} tag={res.tag}  ></Card>
                );
            }
            else {
                return;
            }
        });
    }


    return (
        <>
            <h1>Abyssal Dungeon Boss Guide</h1>
            <div className='search__container'>
                <form className='search__form' >
                    <label for="search" >Search: </label>
                    <input id="search" className='search' type="search" placeholder="..." onChange={(e) => setSearch(e.target.value)}></input>
                   </form>
            </div>
            <Tabs tier={setTier}
                children={[
                    {
                        props: { label: 'Tier 1', number: 1 }
                    },
                    {
                        props: { label: 'Tier 2', number: 2 }
                    },
                    {
                        props: { label: 'Tier 3', number: 3 }
                    }
                ]}
            />
            <div className="cards">

                <div className="cards__container">
                    <div className="cards__wrapper">
                        {layoutCards()}
                    </div>
                </div>
            </div>

        </>
    );
}
