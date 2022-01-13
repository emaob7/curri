import React from 'react';
import { CompactPicker  } from 'react-color';

function Colors (props){
    
   const {color, setColor,disable,setDisable} = props;
   
   const handleChange = color => 
   setColor(color.hex)
   if(disable.color === true){
    setDisable({datos: true, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: true,color:false});
  };

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