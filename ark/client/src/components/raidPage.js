//This function needs to be called Raid for the navbar to link to it.
import React from 'react';
import RefactoredBossCard from './refactored-boss-card/BossCard';
import Tabs from './Tabs';
import './bossPage.css';


export default function Raid() {

  return (
    <>
    <h1>Raids</h1>
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
