import React, { Component } from "react";

class Test extends Component {

    constructor() {
        super()
        this.state = {
            message: 'User'
        }
    }

    changeMessage()
    {
        this.setState({
            message: 'Brecon'
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Log on</button>
            </div>
        )
    }
}
export default Test