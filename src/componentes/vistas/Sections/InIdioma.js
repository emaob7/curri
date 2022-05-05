import React from 'react';
import {
    Grid,
    TextField,AccordionSummary,
    Accordion,Chip,Button,
    FormControl,
    Select ,
    MenuItem,
    InputLabel,
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


  function InIdioma(props) {
      const {idi, handleInputChangei, handleRemoveClicki, handleAddClicki, ...other } = props;

    return (
        <>
 
      {idi.map((x, i) => {
        return (
          <Accordion style={style.accordeon} key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Chip 
            style={style.chips} 
            color="primary"  
            label={x.idioma || ""} 
            onDelete={() => handleRemoveClicki(i)} 
            />
          </AccordionSummary> 
          <AccordionDetail>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <TextField
              name="idioma"
              label="Idioma"
              value={x.idioma || ""}
              onChange={e => handleInputChangei(e, i)}
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
            onChange={e => handleInputChangei(e, i)}
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
            </Grid>
            </AccordionDetail>
            </Accordion>
        );
      })}
    
    <Button 
    style={style.button} 
    onClick={handleAddClicki} 
    color="primary"  
    startIcon={<AddIcon/>}>
    Agregar
    </Button>
    
        </>
      );
}
export default InIdioma;


{/*      */} 