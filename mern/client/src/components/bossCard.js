import React from "react";
import './bossCard.css'

import card from '../logo192.png'

 function BossCard(props) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={card} alt="Avatar" />
                    <h1 class="flip-card-front-text">Ark style</h1>
                </div>
                <div class="flip-card-back">
                    <h1>{props.name}</h1>
                    <h1>{props.email}</h1>
                    <h1>{props.password}</h1>
                </div>
            </div>
        </div>
    );
}

export default BossCard