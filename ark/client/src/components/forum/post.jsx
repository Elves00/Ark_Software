import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Posts(props) {

    const [value, setValue] = useState();
    const [disable, setDisable] = useState(); //1 up is on -1 down is on -100 nothing is on
    const [id, setId] = useState();
    const [userId, setUserId] = useState();
    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };


    useEffect(() => {
        setId(props.props._id);
        setUserId((props.userId));
        setValue(props.props.raiting);
        findUser();

    }, []);


    function findUser() {
        //Search each post to see if the current user has upvoted or downvoted
        if (props.props.vote) {

            let id = props.props._id
            let userId = (props.userId);

            try {
                //if the current user has voted set the votes to match
                axios.post(
                    "http://localhost:5000/findUser",
                    { id, userId },
                    config
                )
                    .then((res) => {
                        //If the user has voted updates the page to reflect there previous votes
                        console.log(res.data)
                        switch (res.data) {
                            case 1:
                                setDisable(1);
                                break;
                            case -100:
                                setDisable(-100);
                                break;
                            case -1:
                                setDisable(-1);
                                // redButton("down");
                                break;

                            default:
                                setDisable(-100);
                                break;
                        }
                    });
            }

            catch (error) {
                console.log("There was an error")
            }
        }

    }



    //Styles the inital buttons based on disable.
    function styleButtons() {
        switch (disable) {
            case 1:
                greenButton("up");
                break;
            case -100:
                plainButton("up");
                plainButton("down");
                break;
            case -1:
                redButton("down");
                break;

            default:
                break;
        }
    }


    //Changes the color of a button to green
    function greenButton(key) {
        if (id == null || key == null) {
            console.log("id:" + id + " key:" + null);
        } else {
            document.getElementById(id + key).style.borderColor = "greenyellow";
            document.getElementById(id + key).style.backgroundColor = "greenyellow";
        }
    }

    //Changes the color of a button to red
    function redButton(key) {
        if (id == null || key == null) {
            console.log("id:" + id + " key:" + null);
        } else {
            document.getElementById(id + key).style.borderColor = "#red";
            document.getElementById(id + key).style.backgroundColor = "red";
        }
    }

    //Changes the color of a button to plain
    function plainButton(key) {
        if (id == null || key == null) {
            console.log("id:" + id + " key:" + null);
        } else {
            document.getElementById(id + key).style.borderColor = "#fcfaf2";
            document.getElementById(id + key).style.backgroundColor = "";
        }
    }

    //send a post request to the database with the current state of the button and the value to change the post by.
    function databaserait(number, disable) {
        try {
            axios.post("http://localhost:5000/rait",
                { disable, number, userId, id },
                config
            )
            //changes the value displayed on the page
            setValue(value + number);
            //changes what button is deemed acctive
            setDisable(disable);
        } catch (error) {
            console.log(error)
        }
    }

    function up() {

        let number = 0;



        //If the post has a vote object check if we have voted
        //If we have not voted increment

        if (disable == 1) {
            plainButton("up");
            databaserait(-1, -100,)
        }
        else if (disable == -100) {


            greenButton("up");
            plainButton("down");

            databaserait(1, 1,)
        }
        else {


            greenButton("up");
            plainButton("down");
            databaserait(2, 1,)
        }
    }



    function down() {

        let number = 0;
        if (disable == -1) {

            plainButton("down");
            databaserait(1, -100,)
        }
        else if (disable == -100) {

            redButton("down");
            plainButton("up");
            databaserait(-1, -1,)
        }
        else {
            redButton("down");
            plainButton("up");
            databaserait(-2, -1,)
        }
    }

    function loadButtons() {
        //Functions is called once id has been loaded in so that each button can be styled using style buttons
        styleButtons();
        return (
            <div className="like-dislike subforum-column">
                <button onClick={up} className="forumUp" id={id + "up"} >up</button>
                <button onClick={down} className="forumDown" id={id + "down"}>down</button>
                <p>{value}</p>
            </div>);
    }

    return (
        <div className="forum__content">
            <div className="subforum-row">
                {id ?
                    loadButtons()
                    :
                    <div>loading</div>
                }
                <div className="description subforum-column">
                    <h2 className='subforum-row-header'>
                        {props.props.title}
                    </h2>
                    <p>
                        {props.props.content}
                    </p>
                </div>
                <div className="post-date subforum-column">
                    <b>
                       Last Post
                    </b>{' '}
                    by {props.props.name}
                    <br></br>
                    on {props.props.date}
                </div>
            </div>
        </div>

    );

}
