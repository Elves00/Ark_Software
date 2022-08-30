import React from "react";
import "./block.css"

/*Card which is used to display popular pages */
function Block(props) {

    // props.props.h1;

    function displayBlock() {
        if (props.props.tag == "text") {
            return (
                <div className="block">
                    <h1 className="block-header">{props.props.h1}</h1>
                    <p className="block-content">{props.props.content}</p>
                </div>
            )
        }
        else if (props.props.tag == "video") {
            return (
                <div className="block">
                    <h1 className="block-header">{props.props.h1}</h1>
                    {/* <p className="block-content">{props.props.content}</p> */}
                    <div className="video">
                        <iframe width="697" height="392" src={props.props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            )
        }
        else if (props.props.tag == "image") {
            return (
                <div className="block">
                    <div>
                        < img
                            src={props.props.image}
                            alt="firstbanner"
                            className="image"
                        />
                    </div>

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