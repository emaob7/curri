import React from 'react';
import {Fab,Tooltip,Hidden} from "@material-ui/core";





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
    const {handlePrint, setSelectedIndex, guardarDesign} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
   

    

  

 
      return (
        <>
<div style={style.corner}>
        
     
     
      
     

     <Tooltip title="Siguiente" placement="left">
     <Fab  
              style={style.fab}
              variant="extended"
              size="medium"
              color="primary"
              onClick={handlePrint}
            >
              Siguiente
     </Fab>
     </Tooltip>
     
     </div>

        </>
        
      )
  }