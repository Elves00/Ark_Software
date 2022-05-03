import React from "react";
import './homeCard.css'
import { Link } from 'react-router-dom';

/*Card which is used to display popular pages */
function Card(props) {

    /*Not sure if this is the best way but this will cast the passed attribute to allow it to be used in the to pathing for link */
    const a = props.path + "";
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={a}>
                    <figure
                        className="cards__item__pic-wrap"
                        data-category={props.tag}
                    >
                        <img
                            src={props.src}
                            alt="Lost Ark"
                            className="cards__item__img"
                        />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.name}</h5>
                    </div>
                </Link>
            </li>
        </>


    );
}

export default Card