import { Card, CardMedia, CardContent, makeStyles, Typography, CardActions } from '@material-ui/core';
import React from 'react'
import image from '../images/imageMe.jpg'
import TypeWriterEffect from 'react-typewriter-effect'
import { Button } from 'react-scroll/modules';

const About = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        <div className={classes.sectionContent} id={id}>
            <Typography variant='h3'>
                {title}
            </Typography>
            <Card className={classes.card}>
                <CardMedia image={image} className={classes.cardMedia} tittle="picture"/>
                    <CardContent className={classes.cardContent}>
                        <TypeWriterEffect text="Hola, mi nombre es Jefferson Nuñez" 
                        textStyle={{fontSize: "2rem", fontWeight: "700px", color: "tomato"}}
                        startDelay={100}
                        cursorColor="#333"
                        typeSpeed={100}/>  

                        <TypeWriterEffect text="Me gusta la programación" 
                        textStyle={{fontSize: "1.2rem", fontWeight: "500px", color: "black"}}
                        startDelay={2500}
                        cursorColor="#333"
                        typeSpeed={100}/>  
                    </CardContent>
                    <CardActions>
                        <button text="Download CV"/>
                    </CardActions>
            </Card>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme)=> ({
    section: {
        minHeight: '100vh',
        
    },
    sectionDark: {
        background: '#333',
        color: '#fff',
    },
    sectionContent: {
        maxWidth: "90vw",
        margin: "0 auto",

    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
        
    },
    cardMedia: {
        width: "250px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5),
    },
    cardContent: {
        
    },
  }))

export default About