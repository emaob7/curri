import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Papel from "../../Children/Papel";
import { Grid } from "@material-ui/core";


export const Address = ({ formData, setForm, navigation }) => {
  const {obje } = formData;
  return (
    <Papel>
      
      <h3>Objetivos</h3>
      
      <Grid item xs={12} md={12}>
            <TextField
              name="obje"
              label="Objetivo Profesional"
              variant="outlined"
              helperText="ej: Quiero trabajar en la Empresa para ayudar al excelente equipo y aprender de ellos"
              size="small"
              multiline
              rows={5}
              fullWidth
              onChange={setForm}
              value={obje}
            />
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
