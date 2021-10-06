import React from 'react';
import {
    Grid,
    TextField,
   
  } from "@material-ui/core";

  

export default function InReferencia(props){


    return (
        <>
        <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name={props.refe}
                    variant="outlined"
                    fullWidth
                    size="small"
                    label="Referencia"
                    value={props.referencia}
                    onChange={props.change}
                    InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder="Ej:  Hugo César Ortigoza"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <TextField
                    name={props.tel}
                    variant="outlined"
                    fullWidth
                    size="small"
                    label="Referencia"
                    value={props.telefono}
                    onChange={props.change}
                    InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder="Ej:  09817451**"
                  />
                
                </Grid>




                
            </Grid>         
        </>
      );
}