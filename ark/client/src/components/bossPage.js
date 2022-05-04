import React, { useEffect, useState } from 'react';
import './bossPage.css';
import RefactoredBossCard from './refactored-boss-card/BossCard';
import Tabs from './Tabs';

export default function Boss() {
    return (
        <>
            <h1>Abyssal Dungeon Boss Guide</h1>
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
                                path="/services"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Necromancer's Origin"
                                label="Dungeon"
                                path="/services"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Necromancer's Origin"
                                label="Dungeon"
                                path="/services"
                            />
                            <RefactoredBossCard
                                src="Lost-Ark-Images/laimage1.jpg"
                                text="Necromancer's Origin"
                                label="Dungeon"
                                path="/services"
                            />
                        </div>
                        <div class="break"></div>
                        <h2>Phantom Palace</h2>
                        <div className="cards__items">
                            <RefactoredBossCard
                                src="Lost-Ark-Images/img1.jpg"
                                text="Hall of the Twisted Warlord"
                                label="Dungeon"
                                path="/services"
                            />
                            <RefactoredBossCard
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
