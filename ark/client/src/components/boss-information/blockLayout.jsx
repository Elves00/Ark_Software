import React, { useState, useEffect } from "react";
import Block from "./block";

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
            <Block props={content}></Block>
        );
        return (<div>{listItems}</div>);
    };



    return (
        <div>
            {displayBlocks()}
        </div>
    );
}

