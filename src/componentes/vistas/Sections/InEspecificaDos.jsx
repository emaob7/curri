import React from "react";
import {
    Grid,
    TextField, Chip,AccordionSummary,
    Accordion, Button
  } from "@material-ui/core";
  import AddIcon from "@material-ui/icons/Add";
  import AccordionDetail from "@material-ui/core/AccordionDetails";
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


  const style = {
    papel: {
      
      padding: 10,
      marginTop: 7,
    },
    accordeon: {
      marginTop: 5,
    },
    button: {
      margin: "auto",
      marginTop: 10,
    },


  };


function InEspecificaDos(props) {
    const { expe,handleInputChange,handleRemoveClick,handleAddClick, ...other } = props; 
    

  return (
    <>
     
      {expe.map((x, i) => {
        return (
          <Accordion style={style.accordeon} key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Chip style={style.chips} color="primary"  label={x.empre} onDelete={() => handleRemoveClick(i)} />
          </AccordionSummary>
          <AccordionDetail>
          
            <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="empre"
              label="Empresa/ Institución"
              value={x.empre || ""}
              onChange={e => handleInputChange(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="puesto"
              label="Puesto"
              value={x.puesto || ""}
              onChange={e => handleInputChange(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              name="ubicacion"
              label="Ubicación/ ciudad"
              value={x.ubicacion || ""}
              onChange={e => handleInputChange(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="finicio"
              label="Fecha en que ingresaste"
              value={x.finicio || ""}
              onChange={e => handleInputChange(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ffinal"
              label="Hasta fecha"
              value={x.ffinal || ""}
              onChange={e => handleInputChange(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              name="tareas"
              label="Tareas o logros relevantes"
              value={x.tareas || ""}
              onChange={e => handleInputChange(e, i)}
              variant="outlined"
              size="small"
              multiline
              rows={3}
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={12}>
            
              
              
              </Grid>
              
            </Grid>
          
            
            </AccordionDetail>
            </Accordion>
        );
      })}
     <Button style={style.button} onClick={handleAddClick} color="primary"  startIcon={<AddIcon/>}>
        Agregar
      </Button>
    </>
  );
}

export default InEspecificaDos;
