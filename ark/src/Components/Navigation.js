import React, { Component } from "react";
import './Navigation.scss'
class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="special">
                    <li className="specialTwo">Profile</li>
                    <li className="specialTwo">Comunication</li>
                    <li className="specialTwo" >Boss</li>
                </ul>
            </div>
        )
    }
}
export default Navigation