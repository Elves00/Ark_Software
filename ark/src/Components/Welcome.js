import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To Ark {this.props.name}</h1>
               {/* {this.children.props} */}
            </div>
        )
    }
}
export default Welcome