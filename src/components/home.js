import React, { Component } from 'react'
import Male from '../images/male.jpg'
import Female from '../images/female.webp'
import {Link} from 'react-router-dom'
import homepic from '../images/homepic.jpg'


//require('../images/homepic.jpg')
function Home(){
    return(
        <div >
            <div id = "top-home">
                <img src = {homepic}/>


            </div>

            <h3 id = "hello">Shop for a new you</h3>
            <div id = "home-box">
            {/* <div id = "Ben">
                



            </div> */}
            <div className = "image-box">
                <Link to = "/mens">
                {/* <img src = {Male}/> */}
                <img src = {require("../images/malemodel.jpg")} width = "50px"/>
                </Link>

            </div>

            <div className = "image-box"> 
            <Link to = "/womens">
                <img src = {require("../images/fee.jpg")}/>
            </Link>
            </div>
            

            </div>

            
        </div>


    )


}


export default Home