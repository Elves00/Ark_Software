import React from 'react';

export default function Posts(props) {
    return (
        <div className="forum__content">
            <a href="">
            <div className="subforum-row">
                <div className="like-dislike subforum-column">
                    <p>Vote Up or Down</p>
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
                    by <a href="">{props.props.user}</a>
                    <br></br>
                    on {props.props.date}
                </div>
            </div>
            </a>
        </div>

    );
}
