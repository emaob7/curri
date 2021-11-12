import React, {useState} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  typography:{
    marginTop: 40
  }
}));

export default function SimpleBackdrop() {
    
const [load, setLoad] = useState(true);
  const classes = useStyles();

  const handleClose = () => {
    setLoad(false);
  };
 

  return (
    <div>
      
      <Backdrop className={classes.backdrop} open={load} onClick={handleClose}>
                 
        <CircularProgress color="inherit" />
        <Typography variant="h5" className={classes.typography}>
        Cargando...
        </Typography>
      </Backdrop>
    </div>
  );
}
