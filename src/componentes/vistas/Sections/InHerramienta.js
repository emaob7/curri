import React from "react";
import {
    Grid,
    TextField, Chip,AccordionSummary,
    Accordion, Button,FormControl,
    Select ,
    MenuItem,
    InputLabel,
  } from "@material-ui/core";
  import AddIcon from "@material-ui/icons/Add";
  import AccordionDetail from "@material-ui/core/AccordionDetails";
import CreateIcon from "@material-ui/icons/Create";


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


function InHerramienta(props) {
    const { herra,handleInputChangeH,handleRemoveClickH,handleAddClickH, ...other } = props; 
    

  return (
    <>
      
      {herra.map((x, i) => {
        return (
          <Accordion style={style.accordeon} key={i}>
          <AccordionSummary expandIcon={<CreateIcon/>}>
          <Chip 
          style={style.chips} 
          color="primary"  
          label={x.herrami || ""} 
          onDelete={() => handleRemoveClickH(i)} 
          />
          </AccordionSummary>
          <AccordionDetail>
            <Grid container spacing={2} >
            
            <Grid item xs={12} md={6}>
            <TextField
              name="herrami"
              label="Herramienta/ Software"
              value={x.herrami || ""}
              onChange={e => handleInputChangeH(e, i)}
              variant="outlined"
              size="small"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <FormControl fullWidth>
            <InputLabel >Nivel</InputLabel>
            <Select
            style={style.select}
            name="nivel"
            value={x.nivel || ""}
            onChange={e => handleInputChangeH(e, i)}
            >
            <MenuItem value="">
            <em>Seleccione</em>
            </MenuItem>
           <MenuItem value="Nivel Avanzado">Nivel Avanzado</MenuItem>
           <MenuItem value="Nivel Intermedio">Nivel Intermedio</MenuItem>
            <MenuItem value="Nivel Básico">Nivel Básico</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
            
            </Grid>
            
            
            </Grid>
            </AccordionDetail>
            </Accordion>
        );
      })}
    
    <Button 
    style={style.button} 
    onClick={handleAddClickH} 
    color="primary"  
    startIcon={<AddIcon/>}>
      Agregar
    </Button>
     
    </>
  );
}

export default InHerramienta;
