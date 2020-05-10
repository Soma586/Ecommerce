import React from 'react'
import {connect } from 'react-redux'
import items from './items'
import axios from 'axios'


let champ = []
function Cart(props){

    if(props.value.items.length === 0){
        return(
            <div>
                <p> the cart is currenly empty</p>
                <button onClick = {buddha}> submit </button>


            </div>

        )

    }else{

        champ = props.value.items
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

function test(){
    return(
        <div>
            <h1>This is a test</h1>
            <p>This was made in react</p>

        </div>

    )
}


function buddha(props){
    let email = "Tarik.Mulholland@gmail.com"
    console.log(champ)
    console.log(champ[0].price)
    console.log(test)

    axios.post("/Mail" , {
        email :"Darkspeedkey@gmail.com",
      name :'baba',
      subjext : "aaa",
      text : champ[0].price,
      img : champ[0].img,
      items : champ


    })
    console.log("called buddha")


}


function maptoprops(globalstate){
    return{
        value : globalstate

    }
}


export default connect(maptoprops, {})(Cart)