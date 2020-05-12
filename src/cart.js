import React, {Component} from 'react'
import {connect } from 'react-redux'
import items from './items'
import axios from 'axios'
import {ArrowDropUp, ArrowDropDown  } from '@material-ui/icons'
import {addquantity, subquantity, removeItem} from './redux/installer'


let champ = []
class Cart extends Component{

    handleClickadd = (id) =>{
        this.props.addquantity(id)
    }

    handleClicksub = (id) =>{
        this.props.subquantity(id)
    }

    handleClickremove = (id) =>{
        this.props.removeItem(id)
    }


    

    

    render(){

    

    if(this.props.value.items.length === 0){
        return(
            <div>
                <p> the cart is currenly empty</p>
                <button onClick = {buddha}> submit </button>
                <button onClick = {hello}>say hi</button>
                


            </div>

        )

    }else{

        champ = this.props.value.items
        let stuff = this.props.value.items.map( item => {
            return(
                <div>
                    <img src = {item.img}/>
                    <div className = "item-des">
                    <p>{item.name}</p>
                    <p> Item: {item.id}</p>
                    <p> Price: ${item.price}</p>
                    <button id = "item-btn" onClick = {() => this.handleClickremove(item)}> delete</button>
                    </div>
                    
                    
                    <p>{item.quantity}</p>
                    <div className="add-remove">
                                            <button onClick = {() => this.handleClickadd(item)} ><ArrowDropUp/></button>
                                            <button onClick = {() => this.handleClicksub(item)} ><ArrowDropDown/></button>
                                        </div>
                    <button onClick = {() => this.handleClickremove(item)}> delete</button>
                    <hr></hr>



                </div>


            )

        })

    

    return(
        <div className = "cart-parent">
             <div className = "left-side">
                 <h3> Shopping Bag</h3>
                 <hr></hr>
                 {stuff}

             </div>
                {/* {stuff} */}
                <div className = "right-side">
                <p>Item Subtotal  {this.props.value.totalcost}</p>
                <p>Estimated shipping </p>

                <p>please enter a valid email address before checking out</p>
                <div id = "error-email"></div>
                <input id = "btn"/>
                <button   onClick = {test}>input</button>
                <button onClick = {buddha}> submit </button>
                </div>

                
           
           
        </div>
    )

    }
}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function test(){
  
    let test = false

    const b = document.getElementById('btn').value.toString()

    if(!validateEmail(b)){
       // console.log('success')
       
    document.getElementById('btn').style.border = "1px solid red"
    document.getElementById("error-email").innerHTML = "valid email required"
    document.getElementById("error-email").style.color = "red"

    }else{
        //console.log('fail')
        document.getElementById('btn').style.border = ""
    document.getElementById("error-email").innerHTML = ""
    //document.getElementById("error-email").style.color = "black"

    }

    
    //console.log(b)
}

function hello(){
    console.log("hellow")
}


function buddha(props){
   // let email = "Tarik.Mulholland@gmail.com"

   let emailh = document.getElementById('btn').value.toString()

  //emailh = emailh.toString()
    console.log(champ)
    console.log(champ[0].price)
    console.log(test)

    axios.post("/Mail" , {
        //email :"Darkspeedkey@gmail.com",
        email : emailh,
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

// const myActions = {
//     add : addquantity


// }


const mapDispatchToProps = (dispatch)=>{
    return{
        addquantity : (id) =>{dispatch(addquantity(id))},
        subquantity : (id) =>{dispatch(subquantity(id))},
        removeItem : (id) =>{dispatch(removeItem(id))}
        
    }

}


export default connect(maptoprops, mapDispatchToProps)(Cart)