import React from 'react';
import {Fab,Tooltip,Hidden} from "@material-ui/core";
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';


const style = {
    
    buttonMobile: {
      marginRight:10,
      position: 'absolute',
      bottom: 56,
      left: 300,
  },
  corner: {
    marginRight: 10,
    position: 'absolute',
  bottom: 16,
  right: 16,
  },
  fab: {
    marginRight: 10,
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
  },
    
};



export default function Hecho (props){
    const {handlePrint, value, setValue, setLefton, leftOn} = props;
      return (
        <>
<div style={style.corner}>
        <Hidden smUp>
          <Fab
        style={style.fab}  
        onClick={()=>{setLefton(!leftOn)}}
        color="primary"
        size="medium"
        >
        <EditIcon/>
        </Fab>
        </Hidden>
          <Tooltip title={value} placement="left">
     <Fab  
              style={style.fab}
              size="medium"
              onClick={()=>{setValue(value + 10)}}
            >
              <ZoomInIcon/>
     </Fab>
     </Tooltip>
     <Tooltip title={value} placement="left">
     <Fab  
              style={style.fab}
              size="medium"
              onClick={()=>{setValue(value - 10)}}
            >
              <ZoomOutIcon/>
     </Fab>
     </Tooltip>
      <Tooltip title="Diseño" placement="left">
     <Fab 
              
              style={style.fab}
              size="medium"
              color="primary"
              onClick={""}
            >
              <PaletteOutlinedIcon/>
     </Fab>
     </Tooltip>
     <Tooltip title="Descargar" placement="left">
     <Fab  
              style={style.fab}
              size="medium"
              color="primary"
              onClick={handlePrint}
            >
              <SaveAltOutlinedIcon/>
     </Fab>
     </Tooltip>
     
     </div>

        </>
        
      )
  }