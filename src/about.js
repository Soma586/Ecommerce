import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from './redux/installer'
//import God from './godtower.jpg'
import item from './items'



// function handleClick( id){
//     increment(id);

// }

class About extends Component{

    handleClick = (id) =>{
        this.props.increment(id)
    }

    render(){
        //let items = item

        return(
            <div>
                <h1> I watch Hunter x Hunter (about) </h1>
                <img src = {item.img}/>
                <button onClick = { () => this.handleClick(item)}>app+</button>
            <button onClick = {decrement}>app-</button>
            </div>
    
    
           
        )

    }
    
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

const mapDispatchToProps= (dispatch)=>{
    
    return{
        increment: (id)=>{dispatch(increment(id))}
    }
}

export default connect(maptoProps, mapDispatchToProps)(About)