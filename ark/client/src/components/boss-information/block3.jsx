import React, { useState, useEffect } from "react";
import Block4 from "./block4";
import axios from "axios";

export default function BlockPage(props) {


    // //useState sets the function state s
    const [blocks, setBlocks] = useState([]);



    //My attempt of understanding use effect to constantly update
    useEffect(() => {
        setBlocks([Object.keys(props.props)]);
    }, []);



    function displayBlocks() {
        let newObj = []
        Object.values(props.props).map(function (key, index) {
            newObj[index] = key;
        });
        console.log(newObj.length)

        const listItems = newObj.map((content) =>
            <Block4 props={content}></Block4>
        );
        return (<h1>{listItems}</h1>);
    };

    let a = "" + props.props.block.h1;

    let b = "" + props.props.block.h1;


    return (
        <div>
            {displayBlocks()}
            {a}
            {b}
            : {Object.keys(props.props)}
            a a{props.props.block.h1}
        </div>
    );
}

