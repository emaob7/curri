import React from 'react';
import {
    Grid,
    TextField,AccordionSummary,
    Accordion,Chip, Button
  } from "@material-ui/core";
  import AccordionDetail from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


  const style = {
    accordeon: {
      marginTop: 5,
    },
    button: {
      margin: "auto",
      marginTop: 10,
    },

  };


  function InEducacion(props) {
      const {educa, handleInputChangeE, handleRemoveClickE, handleAddClickE, ...other } = props;

    return (
        <>
 
      {educa.map((x, i) => {
        return (
          <Accordion style={style.accordeon} key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Chip style={style.chips} color="primary"  label={x.titu || ""} onDelete={() => handleRemoveClickE(i)} />
          </AccordionSummary>
          <AccordionDetail>
          
            <Grid container spacing={2} >
            <Grid item xs={12} md={12}>
            
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="titu"
              label="Titulo de grado"
              value={x.titu || ""}
              onChange={e => handleInputChangeE(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="insti"
              label="Institucion"
              value={x.insti || ""}
              onChange={e => handleInputChangeE(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="duracion"
              label="Duración"
              value={x.duracion || ""}
              onChange={e => handleInputChangeE(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="culminacion"
              label="Fecha de culminacion"
              value={x.culminacion || ""}
              onChange={e => handleInputChangeE(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            
            </Grid>
            </AccordionDetail>
            </Accordion>
        );
      })}
    
    <Button 
    style={style.button} 
    onClick={handleAddClickE} 
    color="primary"  
    startIcon={<AddIcon/>}>
    Agregar
    </Button>
     
           
        </>
      );
}
export default InEducacion;