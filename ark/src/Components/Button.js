import React from "react";
import './Button.css'

const STYLES=[
    'btn--primary',
    'btn--outline'
]

const SIZES= [
    'btn--medium',
    'btn--large'
]

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    /* if there is a button style included set it =buttonstyle else set it ecaule to styles[0]*/
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        //Setting up a class using ``
       <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick ={onClick} type = {type}>
       {children}</button>
    )
}