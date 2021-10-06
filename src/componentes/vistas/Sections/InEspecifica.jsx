import React from 'react';
import {
    Grid,
    TextField,FormControl, Button
  } from "@material-ui/core";


  const style = {
    accordeon: {
      
      marginTop: 5,
    },
  
    text: {
      marginBottom: 20,
    },

  };


  export default function InEspecifica(props){
   const { emprep, empresa, change,puesto,puestop,ubicacionp,ubicacion,ffinalp,ffinal,finiciop,finicio,limpiar,tareasp,tareas, ...other } = props; 

    

    return (
        <div >
          
          
          <form >
          <Grid container spacing={3}>
          
          <Grid item xs={12} md={6}>
            <TextField
              name={emprep}
              variant="outlined"
              fullWidth
              size="small"
              label="Empresa / Institución"
              value={empresa}
              onChange={change}
              placeholder="Ej: Banco Nacional de Fomento"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name={puestop}
              variant="outlined"
              fullWidth
              size="small"
              label="Puesto"
              value={puesto}
              onChange={change}
              placeholder="Ej: Ingeniero de Sistemas"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            
            <Grid item xs={12} md={12}>
            <TextField
              name={ubicacionp}
              variant="outlined"
              fullWidth
              size="small"
              label="Ubicación"
              value={ubicacion}
              onChange={change}
              placeholder="Ej: Asunción"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
             <Grid item xs={12} md={6}>
            <TextField
              name={finiciop}
              variant="outlined"
              fullWidth
              size="small"
              label="Desde fecha"
              value={finicio}
              onChange={change}
              placeholder="Ej: Ene 2019"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name={ffinalp}
              variant="outlined"
              fullWidth
              size="small"
              label="Hasta fecha"
              value={ffinal}
              onChange={change}
              placeholder="Ej: Dic 2020"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              style={style.text}
              name={tareasp}
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
              label="Tareas o logros relevantes"
              value={tareas}
              onChange={change}
              placeholder="Ej: Trabajos de control de software"
              InputLabelProps={{
                shrink: true,
              }}
            />
         
<Button
onClick={limpiar}
>
  limpiar
</Button>

            </Grid>
           
            </Grid>
            </form>

          
         
           
        </div>
      );
}