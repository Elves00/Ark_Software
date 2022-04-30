import './bossPage.css';
import BossCard from './bossCard';


export default function Boss() {
    return (
        <div className="cards">
            <h1 className='h1'>Abyssal Dungeon Boss Guide</h1>
            <h2 className='h2'>Ancient Elveria</h2>
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