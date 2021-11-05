import React from 'react';
import {
    Grid,
    TextField,
  } from "@material-ui/core";

  function InPerfil(props) {
  const {datos, change, guardarDatos, ...other } = props;

    return (
        <>
      {datos.map((x, i) => {
        return (
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sm={12}>
            <TextField
            fullWidth
              name="perfil"
              label="Objetivo Profesional"
              variant="outlined"
              helperText="ej: Quiero trabajar en la Empresa para ayudar al excelente equipo y aprender de ellos"
              multiline
              rows={5}
              onChange={e => change(e, i)}
              value={x.perfil || ""}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Ingeniero de Sistemas"
            />
          </Grid>
        </Grid>
         );
        })}
        </>
    )
     
}
export default InPerfil;