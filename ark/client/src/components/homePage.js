import "./homePage.css"
import React, { useEffect, useState } from "react";
import BossCard from "./bossCard";


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
        <div>
            <h1>Lost Ark</h1>
            {/*Display popular raid cards here */}
            <h2>Popular Raids</h2>
            <div className="grid-container-raids">
                <h2 className="grid-item">Popular Raids</h2>
                <h2 className="grid-item">Popular Raids</h2>
                <h2 className="grid-item">Popular Raids</h2>
                <h2 className="box">Popular Raids</h2>
                <h2 className="box">Popular Raids</h2>
                <h2 className="box">Popular Raids</h2>
            </div>
            <h2>Popular Pages</h2>

            {/*Width is the state*/}
            <p>You clicked {width} times</p>
        </div>
    );
}
