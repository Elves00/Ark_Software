import React from "react";
import './homeCard.css'

/*Card which is used to display popular pages */
function Card(props) {
    return (
        <div class="card">
            <div class="card-inner">
                <div class="card-inner-front-heading">

                    <h1 class="card-inner-front-title">
                        <a class='card-inner-front-title' href='http://localhost:3000/bossPage'>
                            {props.name}
                        </a>

                    </h1>

                </div>
                {/*Displays the content of the page on the card */}
                <div class="card-inner-front-body">
                    <p>
                        {props.content}
                    </p>
                </div>

                <div>
                    <p class="card-inner-front-date">
                        {props.date}
                    </p>
                </div>


            </div>
        </div>
    );
}

export default Card