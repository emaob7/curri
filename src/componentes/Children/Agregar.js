
import React from 'react';
import {Button, Typography } from '@material-ui/core';

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
        <Button 
        onClick={{children}}>Agregar

        </Button>
        
       
        </div>
      )
  }