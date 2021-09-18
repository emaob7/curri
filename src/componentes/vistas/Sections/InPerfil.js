import React from 'react';
import {
    Grid,
    TextField,
  } from "@material-ui/core";

const InPerfil = (props) => {

    return (
        <>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sm={12}>
            <TextField
            fullWidth
              name="obje"
              label="Objetivo Profesional"
              variant="outlined"
              helperText="ej: Quiero trabajar en la Empresa para ayudar al excelente equipo y aprender de ellos"
              multiline
              rows={5}
              onChange={props.change}
              value={props.datos.obje}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Ingeniero de Sistemas"
            />
          </Grid>


        </Grid>
        </>
      );
}
export default InPerfil;