import React, { useEffect, useState } from "react";
import Block3 from "./blockLayout";
import axios from "axios";

export default function BlockPage(props) {


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



    function displayBlocks(props) {
        //Map all response to new Cards
        return blocks.map((res) => {
            if (res.name==props) {
                return (<div><Block3 name={res.name} props={res.content}></Block3></div>);
            }
        });
    };


    return (
        <div>
            {displayBlocks(props.props)}
        </div>
    );
}

