import React, { useState, useEffect } from "react";


/*Card which is used to display popular pages */
function Block(props) {

    // console.log("here")
    // console.log(props.props)
    // //useState sets the function state s
    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        setBlocks([props.props.random])

    }, []);

    // console.log("The block is :" + blocks)

    function list() {
     
        return blocks.map((res) => {
            <h1>anything {res} </h1>
        });

     
    };

    return (
        <>

            {list()}
            <h1> {props.props.random.h1}</h1>
            <p>{props.props.random.content}</p>

        </>
    );
}

export default Block