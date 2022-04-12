import "./homePage.css"
import React, { useEffect, useState } from "react";
import Card from "./card";
import CreateCard from "./createCard";
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

    return (

        <div className="container">

            {/*Display popular raid cards here */}
            <h2 className="Title" >Popular Raids</h2>
            <div className="grid-container-raids">
                <Card name="Guardian Raid" date="7/04/2022" />
            </div>
            <h2 className="Title" >Popular Pages</h2>
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
            {/*Temporary create card*/}
           <CreateCard></CreateCard>
        </div>
    );
}

