import "../front-page/homePage.css"
import React, {useEffect,useState} from "react";
import Block from "./block";
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
            });
    }, []);


    function displayBlocks() {
        //Map all response to new Cards
        return blocks.map((res) => {
            if(res.tag=="Dungeon")
            {
            return (
                <Block path={res.path} src={res.image} name={res.name} tag={res.tag}  ></Block>
            );
        }
        else{
            return <h1>Error</h1>
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

