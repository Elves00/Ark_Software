import React, { useEffect, useState } from 'react';
import './bossPage.css';
import BossCard from './bossCard';

//The record
const Record = (props) => (
    //Uses props.record.name where .record is v important cause we are passing in record as props
    <div>
        <BossCard
            name={props.record.name}
            email={props.record.email}
            password={props.record.password}
        ></BossCard>
        <button
            className="btn btn-link"
            onClick={() => {
                props.deleteRecord(props.record._id);
            }}
        >
            Delete
        </button>
    </div>
);

export default function Boss() {
    return (
        <div className="cards">
            <h1>Abyssal Dungeon Boss Guide</h1>
            <h2>Ancient Elveria</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <BossCard
                            src="Lost-Ark-Images/img1.jpg"
                            text="Demon Beast Canyon"
                            label="Dungeon"
                            path="/services"
                        />
                        <BossCard
                            src="Lost-Ark-Images/laimage1.jpg"
                            text="Necromancer's Origin"
                            label="Dungeon"
                            path="/services"
                        />
                          <BossCard
                            src="Lost-Ark-Images/img1.jpg"
                            text="Hall of the Twisted Warlord"
                            label="Dungeon"
                            path="/services"
                        />
                    </ul>
                    <div class="break"></div>
                    <h2>Phantom Palace</h2>
                    <ul className="cards__items">
                       
                          <BossCard
                            src="Lost-Ark-Images/img1.jpg"
                            text="Hall of the Twisted Warlord"
                            label="Dungeon"
                            path="/services"
                        />
                        
                        <BossCard
                            src="Lost-Ark-Images/laimage1.jpg"
                            text="Hildebrandt Palace"
                            label="Dungeon"
                            path="/services"
                        />
                        {/* <CardItem
                    src='Lost-Ark-Images/laimage1.jpg'
                    text='Ark of Arrogance'
                    label='Dungeon'
                    path='/services'
                    /> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}