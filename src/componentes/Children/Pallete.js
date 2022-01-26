import React from 'react';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import {Fab} from "@material-ui/core";
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
    
  fab: {
    marginRight: 10,
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
  },
    
};


  export default function Pallete (props){
    const {selectedIndex, setSelectedIndex} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      handleClose();
    };

    

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Fab 
              
              style={style.fab}
              size="medium"
              color="primary"
              onClick={handleClick}
            >
              <PaletteOutlinedIcon/>
     </Fab>
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
    </>
    
    )
  }