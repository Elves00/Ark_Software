import React, { Component } from "react";
import Test from './Test';

class Jump extends Component {

    constructor() {
        super()
        this.state = {
            message: 'NotBoss'
        }
    }

    changeMessage()
    {
        this.setState({
            message: 'Boss'
        })
    }

    render() {
        if(this.state.message === "Boss") return <Test/>
        return (
        <div><h1>This is not the boss</h1>
        <button onClick={()=>this.changeMessage()}>Rabbit Rabbit </button>
            </div>
            
        )
    }
}
export default Jump