import React from 'react';
import {
    Grid,
    TextField,AccordionSummary,
    Accordion,Chip,Button,
  } from "@material-ui/core";
  import AccordionDetail from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


  const style = {
    accordeon: {
      marginTop: 5,
      width: "100%"
    },
    button: {
      margin: "auto",
      marginTop: 10,
    },
    select: {
      marginTop: 8,
    },

  };


  function InReferencia(props) {
      const {refe, handleInputChangeR, handleRemoveClickR, handleAddClickR, ...other } = props;

    return (
        <>
 
      {refe.map((x, i) => {
        return (
          <Accordion style={style.accordeon} key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Chip 
            style={style.chips} 
            color="primary"  
            label={x.referencia || ""} 
            onDelete={() => handleRemoveClickR(i)} 
            />
          </AccordionSummary>
          <AccordionDetail>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <TextField
              name="referencia"
              label="Referencia"
              value={x.referencia || ""}
              onChange={e => handleInputChangeR(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>

            <Grid item xs={12} md={6}>
            <TextField
              name="telef"
              label="Telefono"
              value={x.telef || ""}
              onChange={e => handleInputChangeR(e, i)}
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
    onClick={handleAddClickR} 
    color="primary"  
    startIcon={<AddIcon/>}>
    Agregar
    </Button>
    
        </>
      );
}
export default InReferencia;


{/*      */} 