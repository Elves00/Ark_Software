import "./front-page/homePage.css"
import React, { useEffect, useState } from "react";
import Card from "../front-page/homeCard";
import axios from "axios";



export default function blockPage() {

    //useState sets the function state s
    const [block, setBlocks] = useState([]);

    //My attempt of understanding use effect to constantly update
    useEffect(() => {
        //calls get using the fetchcard path
        axios.get('http://localhost:5000/fetchCard')
            //Response is used to set the cards dat
            .then((res) => {
                setBlocks(res.data);
            });
    }, []);


    function displayBlocks() {
        //Map all response to new Cards
        return blocks.map((res) => {
            return (
                <Card path={res.path} src={res.image} name={res.name} tag={res.tag}  ></Card>
            );
        });
    };

    return (

        <div>
            {displayBlocks()}
           <p></p>

        </div>
    );
}

