import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../redux/installer'
//import items from '../items'
import {femaleitems} from '../items/maleitem'





class Femalepage extends Component{

    handleClick = (id) =>{
        this.props.increment(id)
    }

    render(){
        let stuff = femaleitems.map ( item => {
            return(
                <div >
                    <div className = "boxy">
                    <img src = {item.img}/>
                    <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick = { () => this.handleClick(item)}>Add to Cart</button>
                        {/* <button onClick = {decrement}>app-</button> */}


                    </div>
                   

                </div>
                
            )

        }) 

        return(
            <div className = "item-container">
                {/* <h1> I watch Hunter x Hunter (about) </h1> */}
                {/* <img src = {item.img}/> */}
                {/* <button onClick = { () => this.handleClick(item)}>app+</button>
            <button onClick = {decrement}>app-</button> */}
            {stuff}
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

export default connect(maptoProps, mapDispatchToProps)(Femalepage)