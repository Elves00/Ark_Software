import React from 'react'

/*function Greet()
{
    return <h1>Welcome to Ark</h1>
}
*/
//Convention is to use es6
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Welcome to Ark {props.name}
            </h1>
            {props.children}
        </div>
    )
}
export default Greet