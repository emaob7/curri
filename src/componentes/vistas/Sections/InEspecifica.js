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


const InEspecifica = (props) => {

    return (
        <div >

        
          <Accordion style={style.accordeon}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="button" gutterBottom>
          {props.empre}
            </Typography>
          </AccordionSummary>
          <AccordionDetail >
          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              name={props.emprep}
              variant="outlined"
              fullWidth
              size="small"
              label="Empresa / Institución"
              value={props.empre}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Banco Nacional de Fomento"
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name={props.puestop}
              variant="outlined"
              fullWidth
              size="small"
              label="Puesto"
              value={props.puesto}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Ingeniero de Sistemas"
            />
            </Grid>
            
            <Grid item xs={12} md={12}>
            <TextField
              name={props.ubicacionp}
              variant="outlined"
              fullWidth
              size="small"
              label="Ubicación"
              value={props.ubicacion}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Asunción"
            />
            </Grid>
             <Grid item xs={12} md={6}>
            <TextField
              name={props.finiciop}
              variant="outlined"
              fullWidth
              size="small"
              label="Desde fecha"
              value={props.finicio}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Ene 2019"
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name={props.ffinalp}
              variant="outlined"
              fullWidth
              size="small"
              label="Hasta fecha"
              value={props.ffinal}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Dic 2020"
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              style={style.text}
              name={props.tareasp}
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
              label="Tareas o logros relevantes"
              value={props.tareas}
              onChange={props.change}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Ej: Trabajos de control de software"
            />
            </Grid>
            </Grid>


          </AccordionDetail>
            </Accordion>

          
         
           
        </div>
      );
}
export default InEspecifica;