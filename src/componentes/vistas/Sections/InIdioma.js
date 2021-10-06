import React from 'react';
import {
    Grid,
    TextField,
    FormControl,
    Select ,
    MenuItem,
    InputLabel,
   
  } from "@material-ui/core";

  

export default function InIdioma(props){


    return (
        <>
        <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name={props.idi}
                    variant="outlined"
                    helperText="ej: Inglés"
                    fullWidth
                    size="small"
                    label="Idioma"
                    value={props.idioma ? props.idioma : ""}
                    onChange={props.change}
                    
                      placeholder="Ej: Inglés"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <FormControl fullWidth>
  <InputLabel >Nivel</InputLabel>
  <Select
    name={props.niv}
    value={props.nivel ? props.nivel : ""}
    onChange={props.change}
  >
    <MenuItem value="">
     <em>Seleccione</em>
   </MenuItem>
    <MenuItem value="Nivel Avanzado">Nivel Avanzado</MenuItem>
    <MenuItem value="Nivel Intermedio">Nivel Intermedio</MenuItem>
    <MenuItem value="Nivel Básico">Nivel Básico</MenuItem>
  </Select>
</FormControl>   
                </Grid>




                
            </Grid>         
        </>
      );
}