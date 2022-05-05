import React from "react";
// import './bossCard.css';
import { Link } from 'react-router-dom';

function BossCard({ path, label, text, src }) {
    return (
        <>
            {/* <li className="cards__item">
                <Link className="cards__item__link" to={path}>
                    <figure
                        className="cards__item__pic-wrap"
                        data-category={label}
                    >
                        <img
                            src={src}
                            alt="Lost Ark"
                            className="cards__item__img"
                        />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </Link>
<<<<<<< HEAD
    </li> */}
=======
            </li> */}
>>>>>>> f59a00e32abd760004f6cb6918f705be63a67ce0
        </>
    );
}

export default BossCard