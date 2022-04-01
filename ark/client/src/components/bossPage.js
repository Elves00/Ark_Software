
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './bossPage.css'
import BossCard from "./bossCard";

//The record
const Record = (props) => (
    //Uses props.record.name where .record is v important cause we are passing in record as props
    <div>
        <BossCard name={props.record.name} email={props.record.email} password={props.record.password}></BossCard>
        <button className="btn btn-link"
            onClick={() => {
                props.deleteRecord(props.record._id);
            }}
        >
            Delete
        </button>
    </div>
);

export default function Boss() {

    //useState sets the function state
    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/record/`);

            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);


    // This method will delete a record
    async function deleteRecord(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
            return (
                <div class="grid-item">
                    <Record
                        record={record}
                        deleteRecord={() => deleteRecord(record._id)}
                        key={record._id}
                    />
                </div>
            );
        });
    }

    return (
        <div>
            <h1>BIG SCARRY BOSSS</h1>


            <div class="grid-container">

                {recordList()}

                <div class="grid-item"><BossCard name="Rebecca"></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                <div class="grid-item"><BossCard></BossCard></div>
                {/*One item in the grid not a bunch of items */}

            </div>



        </div>

    );
}


