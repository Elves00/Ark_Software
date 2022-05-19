//This function needs to be called Raid for the navbar to link to it.
import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import axios from 'axios';
import Card from './front-page/homeCard';
import './bossPage.css';



export default function Raid() {

    const tag = 'Raid';

    //What tier of raids to populate the page
    const [card, setCards] = useState([]);

    //Search term
    const [term, setSearch] = useState("");

    const [tier, setTier] = useState(1);



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
                axios.post("http://localhost:5000/findRaid",
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
                axios.post("http://localhost:5000/searchRaid",
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

    }, [term, tier]);

    function oneCard() {
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
                <form className='search__form' >
                    <label for="search" >Search: </label>
                    <input id="search" className='search' type="text" placeholder="..." onChange={(e) => setSearch(e.target.value)}></input>
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
                    },
                    {
                        props: { label: 'Tier 4', number: 4 }
                    },
                    {
                        props: { label: 'Tier 5', number: 5 }
                    },
                    {
                        props: { label: 'Tier 6', number: 6 }
                    }
                ]}
            />

            <div className="cards">
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <div className="cards__items">
                            {oneCard()}
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
