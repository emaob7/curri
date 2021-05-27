import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Papel from "../../Children/Papel";
import { Grid } from "@material-ui/core";

export const Contact = ({ formData, setForm, navigation }) => {
  const { nomref, telref, nomref1, telref1, } = formData;

  return (
    <Papel>
      
      <h3>Referencia personal</h3>
      <Grid container spacing={3}>
      

          <Grid item xs={12} md={6}>
            <TextField
              name="nomref"
              label="Nombre Completo"
              variant="outlined"
              helperText="ej: Lic. Luisa Bordón"
              size="small"
              fullWidth
              onChange={setForm}
              value={nomref}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="telref"
              label="Número de Telefono"
              variant="outlined"
              size="small"
              helperText="ej: +595981745130"
              fullWidth
              
              onChange={setForm}
              value={telref}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="nomref1"
              label="Nombre completo"
              variant="outlined"
              helperText="ej: Ing. Luis Ortigoza"
              size="small"
              fullWidth
              onChange={setForm}
              value={nomref1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="telref1"
              label="Número de telefono"
              variant="outlined"
              helperText="ej: +595981576244"
              size="small"
              fullWidth
              onChange={setForm}
              value={telref1}
            />
          </Grid>
   </Grid>
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="Gray"
          variant="outlined"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Atrás
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Siguiente
        </Button>
      </div>
    </Papel>
  );
};
