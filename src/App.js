import { makeStyles } from "@material-ui/core";

//Import Components
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';




function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar id='navbar'/>
      <About title='Aboute me' id='about' dark={true}/>
      <Skills title='My skills' id='skills' dark={false}/>
      <Work title='My work' id='work' dark={true}/>
      <Contact title='Get touch' id='contact' dark={false}/>
    </div>
  );
}


const useStyles = makeStyles((theme)=> ({
  root: {

  }
}))
export default App;
