import React from "react";
import './homeCard.css'

/*Card which is used to display popular pages */
function dungeonCard(props) {
    return (
        <div class="card">

            <div className="title">
                <h1 className="title">
                    {props.name}
                </h1>
            </div>
            <div className="content">
                {/*             
            Inside the content container we should create a series of headers with content.
            This should create as many entries as present in the stored document */}
                if ({props.header}) {
                    <h2 className="headers"></h2>
                }
                if({prop.video})
                {
                    <video></video>
                }
                if ({props.content}) {
                    <p className="Content"></p>

                }


            </div>
            {/*etc*/}
        </div>
    );
}

export default dungeonCard