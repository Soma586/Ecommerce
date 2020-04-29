import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from './redux/installer'





function About(props){
    return(
        <div>
            <h1> I watch Hunter x Hunter (about) </h1>
            <button onClick = {props.increment}>app+</button>
        <button onClick = {props.decrement}>app-</button>
        </div>


       
    )
}
function maptoProps(globalstate){
    return{
        action : globalstate
    }
}

const myActions = {
    increment : increment,
    decrement : decrement
}

export default connect(maptoProps, myActions)(About)