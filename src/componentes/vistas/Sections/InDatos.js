import React from 'react';
import {
    Grid,
    TextField,
  } from "@material-ui/core";

 

  function InDatos(props) {
  const {datos, change, guardarDatos, ...other } = props;


    return (
        <>
          
          {datos.map((x, i) => {
        return (
        <Grid container spacing={3} key={i}>
     
          <Grid item xs={12} md={6}>
            <TextField
              name="nombre"
              label="Nombre"
              variant="outlined"
              size="small"
              fullWidth
              onChange={e => change(e, i)}
              value={x.nombre || ""}
              placeholder="Ej: Emmanuel"
              
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="ape"
              label="Apellidos"
              variant="outlined"
              size="small"
              fullWidth
              onChange={e => change(e, i)}
              value={x.ape || ""}
              placeholder="Ej: Ortigoza Bordón"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="prof"
              label="Profesión"
              variant="outlined"
              size="small"
              fullWidth
              onChange={e => change(e, i)}
              value={x.prof || ""}
              placeholder="Ej: Ingeniero de Sistemas"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="cin"
              label="Numero de cedula - DNI"
              variant="outlined"
              helperText="Utiliza tu numero de cedula o DNI"
              size="small"
              fullWidth
              onChange={e => change(e, i)}
              value={x.cin || ""}
              placeholder="Ej: 5310779"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="fena"
              type="date"
              label="Fecha de Nacimiento"
              variant="outlined"
              size="small"
              helperText="ej: 24/01/1992"
              fullWidth
              onChange={e => change(e, i)}
              value={x.fena || ""}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField
              name="nprof"
              label="Número de Reg. profesional"
              variant="outlined"
              size="small"
              fullWidth
              helperText="Sólo en caso que tengas"
              onChange={e => change(e, i)}
              value={x.nprof || ""}
              placeholder="Ej: 235.279"

            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="naci"
              label="Nacionalidad"
              variant="outlined"
              fullWidth
              size="small"
              onChange={e => change(e, i)}
              value={x.naci || ""}
              placeholder="Ej: Paraguaya"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="dir"
              label="Dirección"
              variant="outlined"
              size="small"
              helperText="Ej: Calle Santa Rosa de Lima/ Humaita"
              fullWidth
              onChange={e => change(e, i)}
              value={x.dir || ""}
              placeholder="Ej: Calle Santa Rosa de Lima/ Humaita"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="tel"
              label="Telefono"
              variant="outlined"
              size="small"
              fullWidth
              onChange={e => change(e, i)}
              value={x.tel || ""}
              placeholder="Ej: +595981745130"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              variant="outlined"
              label="Correo electrónico"
              size="small"
              fullWidth
              onChange={e => change(e, i)}
              value={x.email || ""}
              placeholder="Ej: emanuel@gmail.com"
            />
            
          </Grid>
        </Grid>
          );
        })}


        </>
      );
}
export default InDatos;