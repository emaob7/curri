
import React from 'react';
import {Fab, Tooltip, Hidden} from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';



const style = {
    buttonDesktop: {
        marginRight:10,
        position: 'absolute',
        bottom: 16,
        left: 485,
    },
    buttonPreview: {
      marginRight:10,
      position: 'absolute',
      bottom: 126,
      left: 300,
  },
    
    buttonMobile: {
      marginRight:10,
      position: 'absolute',
      bottom: 56,
      left: 300,
  },
    
};

export default function Hecho (props){
    const {guardar, disable, leftOn, setLefton,setValue} = props;


      return (
        <>
          <Hidden smDown>
          <Tooltip title="Guardar Cambios" placement="top-end">
          <Fab
        style={style.buttonDesktop} 
        onClick={guardar}
        color="primary"
        disabled ={disable}
        size="medium"
        >
        <SaveOutlinedIcon/>
        </Fab>
        </Tooltip>
        </Hidden>
        <Hidden smUp>
          <Fab
        style={style.buttonPreview}  
        onClick={()=>{setValue(40);setLefton(!leftOn)}}
        color="primary"
        size="medium"
        >
        <FindInPageOutlinedIcon/>
        </Fab>
        </Hidden>
        
        <Hidden smUp>
          <Fab
        style={style.buttonMobile} 
        onClick={guardar}
        color="primary"
        disabled ={disable}
        size="medium"
        >
        <SaveOutlinedIcon/>
        </Fab>
        </Hidden>

        </>
        
      )
  }