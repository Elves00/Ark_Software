import React, { useState, useEffect } from 'react';
import RefactoredBossCard from './refactored-boss-card/BossCard';
import axios from 'axios';
import Tabs from './Tabs';
import Card from './front-page/homeCard';
import './bossPage.css';

export default function Boss() {


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
                    { tier },
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
            <h1>Abyssal Dungeon Boss Guide</h1>
            <div className='search__container'>
                <form className='search__form' >
                    <label for="search" >Search: </label>
                    <input id="search" className='search' type="text" placeholder="..." onChange={(e) => setSearch(e.target.value)}></input>
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
                    }
                ]}
            />
            <div className="cards">
                <h2>Ancient Elveria</h2>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <div className="cards__items">
                            <RefactoredBossCard
                                src="Lost-Ark-Images/img1.jpg"
                                text="Demon Beast Canyon"
                                label="Dungeon"
                                path="/demon-beast-canyon"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Necromancer's Origin"
                                label="Dungeon"
                                path="/demon-beast-canyon"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Necromancer's Origin"
                                label="Dungeon"
                                path="/demon-beast-canyon"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Necromancer's Origin"
                                label="Dungeon"
                                path="/demon-beast-canyon"
                            />
                        </div>
                        <div class="break"></div>
                        <h2>Phantom Palace</h2>
                        <div className="cards__items">
                            <RefactoredBossCard
                                src="Lost-Ark-Images/img1.jpg"
                                text="Hall of the Twisted Warlord"
                                label="Dungeon"
                                path="/demon-beast-canyon"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Hildebrandt Palace"
                                label="Dungeon"
                                path="/demon-beast-canyon"
                            />
                            {/* <CardItem
                    src='Lost-Ark-Images/laimage1.jpg'
                    text='Ark of Arrogance'
                    label='Dungeon'
                    path='/services'
                    /> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
