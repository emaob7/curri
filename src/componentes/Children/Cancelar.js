import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: 22,
        marginRight: 17,
      },
   
   
  }));






export default function Cancelar (){
    const classes = useStyles();
      return (
        <React.Fragment>
        
        <Fab 
        component={Link} 
        button to="/"
      className={classes.button} 
      color="secondary" 
      aria-label="exit" 
      size="medium" 
      variant="extended"
      >
        Cancelar
      </Fab>
        </React.Fragment>
      )
  }