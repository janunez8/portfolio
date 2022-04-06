import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
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
        icon: <InfoTwoTone fontSize='large'/>
    },
    {
        id: "skills",
        text: "Skills",
        icon: <EmojiObjectsTwoTone fontSize='large'/>
    },
    {
        id: "work",
        text: "My Work",
        icon: <BuildTwoTone fontSize='large'/>
    }, 
    {
        id: "contact",
        text: "Contact me",
        icon: <ContactMailTwoTone fontSize='large'/>
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
                <IconButton edge="end" className={classes.menuButton} onClick={()=> setOpen(!open)}>
                    <Menu fontSize= "large"/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
        
        <Drawer  anchor="right" open={open} onClose={()=>setOpen(false)}>
            <IconButton onClick={()=>setOpen(false)}>
                    <Cancel fontSize = "large"  className={classes.cancelMenu} />        
            </IconButton>
            <Divider/>
            {   
                        menu.map(({id, text, icon}, index) =>(
                            <Link key={index} 
                                className={classes.sidebar}
                                to={id} 
                                spy={true} 
                                activeClass="active" 
                                smooth={true} 
                                duration={500} 
                                offset={-64}>
                                    <ListItem component="h5">
                                        <span>
                                            <ListItemIcon>{icon}</ListItemIcon>                                       
                                        </span>
                                        {text}
                                    </ListItem>
                            </Link>
                        ))
                    }            
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
    cancelMenu: {
        color: "tomato",
        position: "absolute",
        top: 0,
        left: 10,
        
    },
    sidebar: {
        /*ojito*/
        border: "solid 2px",
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vs",
        },
        "& h5":{
            margin: theme.spacing(2, 0, 0, 2),
            fontSize: "1.4rem",
            color: "#333",
            fontWeigth: "bold"
        }, 
        "& h5:hover":{
            color: "tomato",
            cursor: "pointer",
        },
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
