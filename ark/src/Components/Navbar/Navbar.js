import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"

class Navbar extends Component {
           //The inital state clicked = false
           state = { clicked:false}

           handleClick = () => {
            this.setState({clicked: !this.state.clicked})
           }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'> React 
                <i className ="fab fa-react">
                    </i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                
                {/*So depending on if state clicked = true or not change the class / icon from hamburger to cross */}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>


            {/* Depending on clicked changes the class name*/}
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }

}

export default Navbar