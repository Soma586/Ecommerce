import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Box, Badge, Button} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {connect} from 'react-redux'
import {makeStyles} from "@material-ui/core/styles"


function NavBar(props){
    return(
        <div>
            {/* <h3> logo</h3>
            <ul>
               <Link to = "/about"> <li>About</li> </Link>
               <Link to = "/shop"> <li>Shop</li> </Link>


            </ul> */}
            <AppBar  style={{ background: 'orange' }}>
                <Toolbar>
                   
                   {/* <Button component = {Link} to = "/cart"> */}
                   <Link to ="/cart">
                   <Badge badgeContent = {props.value.totalquantity} color = "secondary">
                    <ShoppingCart ></ShoppingCart>
                    </Badge>
                    </Link>

                    <Link to = '/about'>
                        About
                    </Link>

                    <Link to = '/mens'>
                        Mens
                    </Link>
                    {/* </Button> */}
                     
                    {/* </Link> */}

               </Toolbar>


            </AppBar>


        </div>

    )
}

function maptoprops(globalstate){
    return{
        value : globalstate
    }
}

export default connect(maptoprops, {})(NavBar)