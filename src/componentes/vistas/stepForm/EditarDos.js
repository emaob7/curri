import React, { useState } from "react";
import { consumerFirebase } from "../../../server/";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Papel from "../../Children/Papel";
import { Container, Grid, Paper, Tooltip } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  div:{
    backgroundColor:"#fff59d",
    marginBottom:theme.spacing(2),
  },
}));

const NuevoExpEs = ( props) => {
  const firebase = props.firebase;
  const classes = useStyles();
  const [expe, setExpe] = useState([
    { id2: uuidv4(), puesto: "", empre: "", ubicacion: "",finicio: "",ffinal: "", tareas: "" }
  ]);
  const arrayGu = []//este

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

  const handleChangeInput = (id2, event) => {
    const newExpe = expe.map((i) => {
      if (id2 === i.id2) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setExpe(newExpe);
  };

  const handleAddFields = () => {
    setExpe([
      ...expe,
      {id2: uuidv4(), puesto: "", empre: "", ubicacion: "",finicio: "",ffinal: "", tareas: "" },
    ]);
  };


  const handleRemoveFields = (id2) => {
    const values = [...expe];
    values.splice(
      values.findIndex((value) => value.id2 === id2),
      1
    );
    setExpe(values);
  };

  const guardarDatosp = () => {
    const inputF = {...arrayGu, expe};
    const { id } = props.match.params;

    firebase.db
      .collection("Datosps")
      .doc(id)
      .set(inputF, { merge: true })
      .then((success) => {
        props.history.push("/nuevo/experienciag/" + id);;
      });
  };

  return (
    <Papel>
      <h1>Agrega tus experiencias especificas</h1>
      <h3>Sólo experiencias relacionadas al puesto, empieza con las más recientes</h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        {expe.map((inputField) => (
          <Paper key={inputField.id2} className={classes.div}>
            <Container >
              
            <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
            <h5> - {inputField.empre}</h5>
            </Grid>

            <Grid item xs={12} md={6}>
            <TextField
              name="empre"
              variant="outlined"
              fullWidth
              size="small"
              label="Empresa / Institución"
              value={inputField.empre}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="puesto"
              variant="outlined"
              fullWidth
              size="small"
              label="Puesto"
              value={inputField.puesto}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            
            <Grid item xs={12} md={12}>
            <TextField
              name="ubicacion"
              variant="outlined"
              fullWidth
              size="small"
              label="Ubicación"
              value={inputField.ubicacion}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
             <Grid item xs={12} md={6}>
            <TextField
              name="finicio"
              variant="outlined"
              fullWidth
              size="small"
              label="Desde fecha"
              value={inputField.finicio}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ffinal"
              variant="outlined"
              fullWidth
              size="small"
              label="Hasta fecha"
              value={inputField.ffinal}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              name="tareas"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
              label="Tareas o logros relevantes"
              value={inputField.tareas}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
           
            <Grid item xs={12} md={6}>
            <Tooltip title="Quitar" placement="top">
            <IconButton
              disabled={expe.length === 1}
              onClick={() => handleRemoveFields(inputField.id2)}
              color="secondary"
            >
              <DeleteIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Agregar" placement="top">
            <IconButton onClick={handleAddFields} color="primary">
              <AddIcon />
            </IconButton>
            </Tooltip>
            </Grid>
            </Grid>
            </Container>
          </Paper>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={guardarDatosp}
        >
          Guardar cambios
        </Button>
      </form>

      
    </Papel>
  );
};

export default consumerFirebase(NuevoExpEs);
