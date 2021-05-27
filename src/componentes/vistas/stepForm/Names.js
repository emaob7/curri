import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Papel from "../../Children/Papel";
import { Grid } from "@material-ui/core";


export const Names = ({ formData, setForm, navigation }) => {
  const { nom,ape,prof,cin,nprof,naci,fena,dir,tel,email } = formData;

  return (
    <Papel>
      
      <h3>Datos Personales</h3>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
            <TextField
              name="nom"
              label="Nombre"
              variant="outlined"
              helperText="ej: Emmanuel"
              size="small"
              fullWidth
              onChange={setForm}
              value={nom}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="ape"
              label="Apellidos"
              variant="outlined"
              helperText="ej: Ortigoza Bordón"
              size="small"
              fullWidth
              onChange={setForm}
              value={ape}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="cin"
              label="Numero de cedula - DNI"
              variant="outlined"
              helperText="ej: 5310779"
              size="small"
              fullWidth
              onChange={setForm}
              value={cin}
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
              InputLabelProps={{
                shrink: true,
              }}
              onChange={setForm}
              value={fena}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="prof"
              label="Profesión"
              variant="outlined"
              helperText="ej: Ingeniero de Sistemas"
              size="small"
              fullWidth
              onChange={setForm}
              value={prof}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="nprof"
              label="Número de Reg. profesional"
              variant="outlined"
              helperText="ej: 235.279"
              size="small"
              fullWidth
              onChange={setForm}
              value={nprof}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="naci"
              label="Nacionalidad"
              variant="outlined"
              helperText="ej: Paraguaya"
              fullWidth
              size="small"
              onChange={setForm}
              value={naci}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="dir"
              label="Dirección"
              variant="outlined"
              size="small"
              helperText="ej: Calle Santa Rosa de Lima/ Humaita"
              fullWidth
              onChange={setForm}
              value={dir}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="tel"
              label="Telefono"
              variant="outlined"
              size="small"
              helperText="ej: +595981745130"
              fullWidth
              onChange={setForm}
              value={tel}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              variant="outlined"
              label="Correo electrónico"
              size="small"
              fullWidth
              onChange={setForm}
              value={email}
              helperText="ej: emanuel@gmail.com"
            />
            
          </Grid>

          <Grid item xs={12} md={12}>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Siguiente
      </Button>

      </Grid>

      </Grid>
    </Papel>
  );
};
