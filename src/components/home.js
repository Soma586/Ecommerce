import React, { Component } from 'react'
import Male from '../images/male.jpg'
import Female from '../images/female.webp'
import {Link} from 'react-router-dom'



function Home(){
    return(
        <div id = "home-box">
            <div className = "image-box">
                <Link to = "/mens">
                <img src = {Male}/>
                </Link>

            </div>

            <div className = "image-box"> 
            <Link to = "/womens">
                <img src = {Female}/>
            </Link>


            </div>



            
        </div>


    )


}


export default Home