import React, { useEffect, useState } from 'react';
import './bossPage.css';
import BossCard from './bossCard';
import Tabs from './Tabs';

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
    // //useState sets the function state
    // const [records, setRecords] = useState([]);

    // // This method fetches the records from the database.
    // useEffect(() => {
    //     async function getRecords() {
    //         const response = await fetch(`http://localhost:5000/record/`);

    //         if (!response.ok) {
    //             const message = `An error occured: ${response.statusText}`;
    //             window.alert(message);
    //             return;
    //         }

    //         const records = await response.json();
    //         setRecords(records);
    //     }

    //     getRecords();

    //     return;
    // }, [records.length]);

    // // This method will delete a record
    // async function deleteRecord(id) {
    //     await fetch(`http://localhost:5000/${id}`, {
    //         method: 'DELETE'
    //     });

    //     const newRecords = records.filter((el) => el._id !== id);
    //     setRecords(newRecords);
    // }

    // // This method will map out the records on the table
    // function recordList() {
    //     return records.map((record) => {
    //         return (
    //             <div class="grid-item">
    //                 <Record
    //                     record={record}
    //                     deleteRecord={() => deleteRecord(record._id)}
    //                     key={record._id}
    //                 />
    //             </div>
    //         );
    //     });
    // }

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
        </>
    );
}
