import React from 'react';
import {
    Grid,
    TextField,AccordionSummary,
    Accordion, Typography
  } from "@material-ui/core";
  import AccordionDetail from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


  const style = {
    accordeon: {
      
      marginTop: 5,
    },
  
    text: {
      marginBottom: 20,
    },

  };


const InEducacion = (props) => {

    return (
        <div >

        
          <Accordion style={style.accordeon}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="button" gutterBottom>
          {props.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetail >
          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              name={props.tite}
              variant="outlined"
              fullWidth
              size="small"
              label="Titulo de Grado"
              value={props.titulo}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Ingenieria de Sistemas Informáticos"
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name={props.inse}
              variant="outlined"
              fullWidth
              size="small"
              label="Institución"
              value={props.institucion}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Universidad Nacional de Villarrica del Espiritu Santo"
            />
            </Grid>
            
           
             <Grid item xs={12} md={6}>
            <TextField
              name={props.dure}
              variant="outlined"
              fullWidth
              size="small"
              label="Duración"
              value={props.duracion}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: 100 Hs."
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name={props.cule}
              variant="outlined"
              fullWidth
              size="small"
              label="Fecha de culminación"
              value={props.culminacion}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Dic 2020"
            />
            </Grid>
            
            </Grid>


          </AccordionDetail>
            </Accordion>

          
         
           
        </div>
      );
}
export default InEducacion;