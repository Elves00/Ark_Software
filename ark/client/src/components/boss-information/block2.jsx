import React, { useState, useEffect } from "react";


/*Card which is used to display popular pages */
function Block(props) {

    console.log("here")
    console.log(props.props)

 
    return (
        <>
           
            <h1> {props.props.h1}</h1>
            <p>{props.props.content}</p>

        </>
    );
}

export default Block