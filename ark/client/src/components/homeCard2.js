import React from "react";
import './homeCard2.css'
import { Link } from 'react-router-dom';

/*Card which is used to display popular pages */
function Card(props) {

    /*Not sure if this is the best way but this will cast the passed attribute to allow it to be used in the to pathing for link */
    const a = props.path + "";

    return (
        <>
            <li className="cards__item">
                {/*Links to the page the card represents */}
                <Link className="cards__item__link" to={a}>
                    {/* Handles the cards tag ie wether it is a raid or dungeon */}
                    <figure
                        className="cards__item__pic-wrap"
                        data-category={props.tag}
                    >
                        {/*Handles the image in the background of the card */}
                        <img
                            //the image location is contained in props.src
                            src={props.src}
                            alt="Lost Ark Image"
                            className="cards__item__img"
                        />
                    </figure>
                    {/*Handles the text beneath the image */}
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.name}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default Card