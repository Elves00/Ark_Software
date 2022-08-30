import React, { useEffect, useState } from "react";
import Block from "./blockLayout";
import axios from "axios";

export default function BlockPage(props) {

    // //useState sets the function state s
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/fetchPage')
            .then((res) => {
                setBlocks(res.data);
                console.log(res.data)
            });
    }, []);

    function displayBlocks(props) {
        //Map all response to new Cards
        return blocks.map((res) => {
            if (res.name===props) {
                return (<div><Block name={res.name} props={res.content}></Block></div>);
            }
            else{
                return ;
            }
        });
    };


    return (
        <div>
            {displayBlocks(props.props)}
        </div>
    );
}

