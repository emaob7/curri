import React from 'react';
import { CompactPicker  } from 'react-color';

function Colors (props){
    
   const {color, setColor} = props;
   const handleChange = color => setColor(color.hex);

  // style ={{height:"600px"}}
    return (
      <>
      <CompactPicker 
       
        color={color}
        onChangeComplete={handleChange}
      />

      </>
    );
  
}
export default Colors