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
                    <p>{item.quantity}</p>
                    <div className="add-remove">
                                            <button onClick = {() => this.handleClickadd(item)} ><ArrowDropUp/></button>
                                            <button onClick = {() => this.handleClicksub(item)} ><ArrowDropDown/></button>
                                        </div>
                    <button onClick = {() => this.handleClickremove(item)}> delete</button>



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
}

function test(){
    return(
        <div>
            <h1>This is a test</h1>
            <p>This was made in react</p>

        </div>

    )
}

function hello(){
    console.log("hellow")
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