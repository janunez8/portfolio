import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, Divider } from '@material-ui/core'
import React, { useState } from 'react'
import logo from '../images/logo.png'
import {Link, animateScroll as scroll} from 'react-scroll'
//Icons
//import { InfoTwoTone } from '@material-ui/icons/InfoTwoTone'
import { InfoTwoTone, EmojiObjectsTwoTone, BuildTwoTone, ContactMailTwoTone, Menu, Cancel } from '@material-ui/icons'

const menu = [
    {
        id: "about",
        text: "About me",
        icon: <InfoTwoTone/>
    },
    {
        id: "skills",
        text: "Skills",
        icon: <EmojiObjectsTwoTone/>
    },
    {
        id: "work",
        text: "My Work",
        icon: <BuildTwoTone/>
    }, 
    {
        id: "contact",
        text: "Contact me",
        icon: <ContactMailTwoTone/>
    }, 
]

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
      <>
        <AppBar position='sticky' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt='Logo'></img>
                <List className={classes.menu} >
                    {   
                        menu.map(({id, text}, index) =>(
                            <Link key={index} 
                                to={id} 
                                spy={true} 
                                activeClass="active" 
                                smooth={true} 
                                duration={500} 
                                offset={-64}>
                                    {text}
                            </Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={classes.menuButton} onClick={()=> setOpen(true)}>
                    <Menu fontSize= "large"/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
            <IconButton className={classes.closeMenu} onClick={()=>setOpen(false)}>
                    <Cancel/>        
            </IconButton>
            <Divider>
                
            </Divider>
        </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme)=> ({
    root: {
        //Redundante por que sticky ya tiene estas caracteristicas
        background: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"  
    },
    menu: {
        //Resoponsive "sm"
        [theme.breakpoints.down("sm")]: {
            display: "none",

        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeigth: "bold",
            marginLeft: theme.spacing(3)

        },
        "& a:hover":{
            cursor: "pointer",
            color: "tomato",
            borderBottom: "3px solid tomato"
        },
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            //Muestra
            display: "block",
            color: "tomate",
            position: "absolute",
            top: 0,
            right: 10
        },
    },
    closeMenu:{

    },
    logo: {
        height: "2rem",
        objectFit: "contain",
        "&:hover":{
            cursor: "pointer",
        },
    }
  }))

export default Navbar
