import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Box, Badge, Button} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {connect} from 'react-redux'
import {makeStyles} from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow : 1,
    },
    title: {
        flexGrow: 1,
        marginLeft : theme.spacing(8)
    },
    men:{
        marginRight : theme.spacing(3)

    },
    cart:{
        marginRight : theme.spacing(10)
    }

}))

function NavBar(props){
    const classes = useStyles()
    return(
        <div className ={classes.root}>
            {/* <h3> logo</h3>
            <ul>
               <Link to = "/about"> <li>About</li> </Link>
               <Link to = "/shop"> <li>Shop</li> </Link>


            </ul> */}
            <AppBar  style={{ background: 'orange' }}>
                <Toolbar>
                   
                   {/* <Button component = {Link} to = "/cart"> */}
                   <Typography variant="h6" className={classes.title}>
           <Link to = '/'>TMstore </Link> 
          </Typography>

                    {/* <Link to = '/about'>
                        About
                    </Link> */}

                    <Link className= {classes.men} to = '/mens'>
                        Mens
                    </Link>

                    <Link className= {classes.men} to = '/womens'>
                        Womens
                    </Link>

                    <Link className = {classes.cart}to ="/cart">
                   <Badge badgeContent = {props.value.totalquantity} color = "secondary">
                    <ShoppingCart ></ShoppingCart>
                    </Badge>
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