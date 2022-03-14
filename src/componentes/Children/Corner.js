import React from 'react';
import {Fab,Tooltip,Hidden} from "@material-ui/core";
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];




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



export default function Corner (props){
    const {handlePrint, value, setValue, setLefton, leftOn,selectedIndex, setSelectedIndex, guardarDesign} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
      guardarDesign();
    };

    

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

 
      return (
        <>
<div style={style.corner}>
        <Hidden smUp>
          <Fab
        style={style.fab}  
        onClick={()=>{setLefton(!leftOn)}}
        color="secondary"
        size="medium"
        >
        <CloseIcon/>
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
              onClick={handleClick}
            >
              <PaletteOutlinedIcon/>
     </Fab>
     </Tooltip>
     <Menu
        id="long-menu"
       anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        PaperProps={{
          style: {
            maxHeight: 250,
            width: '20ch',
          },
        }}
      >
         {options.map((option, index) => (
          <MenuItem  key={option}
          disabled={index === 0}
          selected={index === selectedIndex}
          onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
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