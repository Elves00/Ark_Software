import React from "react";


/*Card which is used to display popular pages */
function Block(props) {

    // props.props.h1;

    function displayBlock() {
        if (props.props.h1) {
            return (
                <div>
                    <h1>{props.props.h1}</h1>
                    <p></p>
                </div>
            )
        }
    }
    return (
        <div>
            {displayBlock()}
        </div>
    );
}

export default Block