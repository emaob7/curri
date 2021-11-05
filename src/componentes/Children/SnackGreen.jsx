import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SnackGreen(props) {
  const { open, mensaje, handleClose, ...other } = props;
  


  const action = (
    <React.Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="primary"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
     {/*<Button onClick={handleClick}>Open simple snackbar</Button> */} 
      <Snackbar
      anchorOrigin = {{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={mensaje}
        action={action}
      >
       
      </Snackbar>
    </div>
  );
}