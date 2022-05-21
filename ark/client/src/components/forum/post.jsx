import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Posts(props) {


    const [rait, setRait] = useState(0);
    const [value, setValue] = useState();
    const [disable, setDisable] = useState(0);
    const [id, setId] = useState();

    useEffect(() => {
        console.log(props.props._id)
        setId(props.props._id)
        setValue(props.props.raiting);
    }, []);

    
    function up() {


        if (disable == 1) {
            return;
        }

        console.log("The id is :" + id);
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };


        try {
            axios.post("http://localhost:5000/postUp",
                //The name is used to identify the page to increments
                { id },
                config
            )
            setValue(value + 1);
            setDisable(1);

            // alert("Click!");
        } catch (error) {
            console.log(error)
        }
    }

    function down() {

        if (disable == -1) {
            return;
        }
        console.log("The id is :" + id);
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };


        try {
            axios.post("http://localhost:5000/postDown",
                //The name is used to identify the page to increments
                { id },
                config
            )
            setValue(value - 1);
            setDisable(-1);
            // alert("Click!");
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="forum__content">
            <div className="subforum-row">
                <div className="like-dislike subforum-column">
                    <button onClick={up}>up</button>
                    <button onClick={down}>down</button>
                    <p>{value}</p>
                </div>
                <div className="description subforum-column">
                    <h2>
                        <a href="">{props.props.title}</a>
                    </h2>
                    <p>
                        {props.props.content}
                    </p>
                </div>
                {/* <div className="comment-stats subforum-column">
                    <span className="comment-info">30 Posts</span>
                </div> */}
                <div className="post-date subforum-column">
                    <b>
                        <a href="">Last Post</a>
                    </b>{' '}
                    by <a href="">{props.props.name}</a>
                    <br></br>
                    on {props.props.date}
                </div>
            </div>
        </div>

    );
}
