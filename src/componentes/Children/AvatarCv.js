import React from "react";
import { Avatar } from "@material-ui/core";



const style = {
    avatar : {
     // marginLeft: 50,
     // marginBottom:20,
      marginRight: 20,
      width : 120,
      height: 120
    }
}


export default function AvatarCv (props){
    const {fotog, pref} = props;
    
     return fotog && pref.con ?(
       <>
        {pref.cuadrado ? ( 

   <Avatar variant="rounded" style={style.avatar} src={fotog} />

   ) : <Avatar  style={style.avatar} src={fotog} />
   }
       </>
     ):null} 

  