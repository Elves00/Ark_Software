import "../front-page/homePage.css"
import React, { useEffect, useState } from "react";
import Block from "./block";
import Block2 from "./block2";
import Block3 from "./block3";
import axios from "axios";

export default function BlockPage() {


    // //useState sets the function state s
    const [blocks, setBlocks] = useState([]);
   
 

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
                    <Block path={res.path} src={res.image} name={res.name} tag={res.tag}  >Block 1</Block>
                )
            }
            else if (res.content) {
                return (<div><Block3 props={res.content}></Block3><h1>OPTION 2</h1></div>);
            }
            // else if (res.content) {
            //     return (<div><Block3 props={res}></Block3><h1>OPTION 3</h1></div>);
            // }
            else {
                return <h1>error</h1>
            }
        });
    };


    return (
        <div>
            {displayBlocks()}
        </div>
    );
}

