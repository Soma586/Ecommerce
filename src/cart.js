import React from 'react'
import {connect } from 'react-redux'
import items from './items'
import axios from 'axios'


function Cart(props){

    if(props.value.items.length === 0){
        return(
            <div>
                <p> the cart is currenly empty</p>


            </div>

        )

    }else{

        let stuff = props.value.items.map( item => {
            return(
                <div>
                    <img src = {item.img}/>



                </div>


            )

        })

    

    return(
        <div>
             {/* <img src = {props.value.items[0].img} /> 
            <p>helekfsl</p>
                <p> {props.value.Name}</p> */}
                {stuff}
                <button onClick = {buddha}> submit </button>
           
           
        </div>
    )

    }
}


function buddha(){
    let email = "Tarik.Mulholland@gmail.com"

    axios.post("http://localhost:4000" , {
        email


    })
    console.log("called buddha")


}


function maptoprops(globalstate){
    return{
        value : globalstate

    }
}


export default connect(maptoprops, {})(Cart)