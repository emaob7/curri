import React from 'react';
import {
    Grid,
    TextField,
    FormControl,
    FormHelperText,
    Select,
    MenuItem,
  } from "@material-ui/core";

const InIdioma = (props) => {

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
                    value={props.idioma}
                    onChange={props.change}
                    InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder="Ej: Inglés"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl style={{margin: 6, marginLeft: 16 }}>
                    <Select
                      name={props.niv}
                      value={props.nivel}
                      onChange={props.change}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Elija Nivel</em>
                      </MenuItem>
                      <MenuItem value="Nivel Basico">Nivel Básico</MenuItem>
                      <MenuItem value="Nivel Intermedio">Nivel Intermedio</MenuItem>
                      <MenuItem value="Nivel Avanzado">Nivel Avanzado</MenuItem>
                    </Select>
                    <FormHelperText>ej: Nivel Avanzado</FormHelperText>
                  </FormControl>
                </Grid>
            </Grid>         
        </>
      );
}
export default InIdioma;