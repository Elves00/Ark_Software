import "../front-page/homePage.css"
import React, { useEffect, useState } from "react";
import Block from "./block";
import Block2 from "./block2";
import axios from "axios";

export default function BlockPage() {


    // //useState sets the function state s
    const [blocks, setBlocks] = useState([]);
    const [pages, setPages] = useState([]);
 

    //My attempt of understanding use effect to constantly update
    useEffect(() => {
        //calls get using the fetchcard path
        axios.get('http://localhost:5000/fetchPage')
            //Response is used to set the cards dat
            .then((res) => {
                setBlocks(res.data);
                console.log(res.data)      
         
            });
    }, []);

   

    function displayBlocks() {
        //Map all response to new Cards
        return blocks.map((res) => {
            if (res.tag == "Dungeon") {
                return (
                    <Block path={res.path} src={res.image} name={res.name} tag={res.tag}  ></Block>
                )
            }
            else if (res.random) {
                return (<Block2 props={res.random}></Block2>);
            }
            else {
                return <h1>error</h1>
            }
        });
    };


    return (

        <div>
            {displayBlocks()}
   
            <p></p>

        </div>
    );
}

