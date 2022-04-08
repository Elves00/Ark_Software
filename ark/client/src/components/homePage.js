import "./homePage.css"
import React, { useEffect, useState } from "react";
import Card from "./card";
import { useParams, useNavigate } from "react-router";

export default function HomePage() {

    //The state width and how to set it plus intial condition
    const [width, setWidth] = useState(window.innerWidth);


    //Use effect re-sets the width state every time there is a window event
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);


    const [form, setForm] = useState({
        title: "",
        count: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ title: "", count: ""});
        navigate("/");
    }


    return (

        <div className="container">

            {/*Display popular raid cards here */}
            <h2>Popular Raids</h2>
            <div className="grid-container-raids">
                <Card name="Guardian Raid" date="7/04/2022" />
            </div>
            <h2>Popular Pages</h2>
            <div className="grid-container-raids">
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
                <Card name="Guardian Raid" date="7/04/2022" />
            </div>

            {/*Width is the state*/}
            <p>Screen width:{width} </p>
            <h3>Create a new card</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Count</label>
                    <input
                        type="number"
                        className="form-control"
                        id="position"
                        value={form.position}
                        onChange={(e) => updateForm({ count: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

