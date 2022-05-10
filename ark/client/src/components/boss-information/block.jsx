import React from "react";

import { Link } from 'react-router-dom';

/*Card which is used to display popular pages */
function Block(props) {

    /*Not sure if this is the best way but this will cast the passed attribute to allow it to be used in the to pathing for link */
    const path = props.path + "";
    return (
        <>
            <Link to={path} className="boss-card">
                <div className="picture-wrap" data-category={props.tag}>
                    <img src={props.src} alt=""/>
                </div>
                <h1 className="h1">{props.name}</h1>
            </Link>
        </>
    );
}

export default Block