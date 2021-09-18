import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
        width: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    
  }));


  export default function Hoja ({children}){
    const classes = useStyles();
      return (
        <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
        <div className={classes.paper}>
        {children}
        </div>
        </main>
        </React.Fragment>
      )
  }