import React from 'react'
import {connect } from 'react-redux'
import items from './items'


function Cart(props){

    if(props.value.items.length === 0){
        return(
            <div>
                <p> the cart is currenly empty</p>


            </div>

        )

    }else{

    

    return(
        <div>
             <img src = {props.value.items[0].img} /> 
            <p>helekfsl</p>
                <p> {props.value.Name}</p>
           
           
        </div>
    )

    }
}


function maptoprops(globalstate){
    return{
        value : globalstate

    }
}


export default connect(maptoprops, {})(Cart)