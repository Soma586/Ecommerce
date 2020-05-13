import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from './redux/installer'
//import God from './godtower.jpg'
import items from './items'
import axios from 'axios'




// function handleClick( id){
//     increment(id);

// }

class About extends Component{

    handleClick = (id) =>{
        this.props.increment(id)
    }

     wtf = () =>{
        axios.post("/Mail" , {
            // email :"Tarik.Mulholland@gmail.com",
            // //email : emailh,
            // name :'baba',
            // subjext : "aaa",
            // text : champ[0].price,
            // img : champ[0].img,
            // items : champ
    
    
        })
        // console.log("JSHAHDAksjda")

    }

    render(){
        let stuff = items.map ( item => {
            return(
                <div>
                    <div>
                    <img src = {item.img}/>
                        <p>{item.price}</p>
                        <button onClick = { () => this.handleClick(item)}>app+</button>
                        <button onClick = {decrement}>app-</button>


                    </div>
                   

                </div>
                
            )

        }) 

        return(
            <div>
                <h1> I watch Hunter x Hunter (about) </h1>
                <button onClick = {this.wtf}>AHHHHHHH</button>

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

export default connect(maptoProps, mapDispatchToProps)(About)