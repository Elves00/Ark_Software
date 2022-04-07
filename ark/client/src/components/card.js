import React from "react";
import './card.css'

/*Card which is used to display popular pages */
function Card(props) {
    return (
        <div class="card">
            <div class="card-inner">
                <div class="card-inner-front">
                    <h1 class="card-inner-front-text">
                        {props.name}
                    </h1>
                    <p class="card-inner-front-date">
                        {props.date}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card