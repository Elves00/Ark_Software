import React, { Component } from "react";

class Test extends Component {

    constructor() {
        super()
        this.state = {
            name: 'Hello'
        }
    }

    changeMessage()
    {
        this.setState({
            name: 'Brecon'
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome To Ark {this.state.name}</h1>
            <button onClick={()=>this.changeMessage()}>Log on</button>
            </div>
        )
    }
}
export default Test