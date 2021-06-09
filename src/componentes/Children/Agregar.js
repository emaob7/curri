
import React from 'react';
import {Typography } from '@material-ui/core';
import Found from '../Imagenes/svg/found.svg'

const style = {
    foto: {
        width: "50%",
        height: "50%",
        marginLeft:"25%"
    },
    
};

export default function Agregar ({children}){
    
      return (
        <div style={{backgroundColor: '#fafafa'}}>
        <img  src ={Found} style={style.foto} />
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >{children}</div>
       
        </div>
      )
  }