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

const Educacion = ( props, {navigation} ) => {
  const firebase = props.firebase;
  const classes = useStyles();
  const [edu, setEdu] = useState([
    { id2: uuidv4(), tit: "", ins: "",dur:"",des:"", cul: "" }
  ]);
  const arrayGu = []//este

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

  const handleChangeInput = (id2, event) => {
    const newEdu = edu.map((i) => {
      if (id2 === i.id2) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setEdu(newEdu);
  };

  const handleAddFields = () => {
    setEdu([
      ...edu,
      { id2: uuidv4(), tit: "", ins: "",dur:"",des:"", cul: ""},
    ]);
  };


  const handleRemoveFields = (id2) => {
    const values = [...edu];
    values.splice(
      values.findIndex((value) => value.id2 === id2),
      1
    );
    setEdu(values);
  };

  const guardarDatosp = () => {
    const inputF = {...arrayGu, edu};
    const { id } = props.match.params;

    firebase.db
      .collection("Datosps")
      .doc(id)
      .set(inputF, { merge: true })
      .then((success) => {
        props.history.push("/");
      });
  };

  return (
    <Papel>
      <h1>Agrega detalles de tu Educación</h1>
      <h3>Puedes empezar a agregar primero tu nivel Universitario, relacionado al puesto.</h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        {edu.map((inputField) => (
          <Paper key={inputField.id2} className={classes.div}>
            <Container >
              
            <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
            <h5> - {inputField.tit}</h5>
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="tit"
              variant="outlined"
              helperText="ej: Ingenieria de Software"
              fullWidth
              size="small"
              label="Titulo obtenido"
              value={inputField.tit}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ins"
              variant="outlined"
              fullWidth
              size="small"
              helperText="ej: Universidad Nacional de Villarrica del Espiritu Santo"
              label="Institución/Universidad/Colegio"
              value={inputField.ins}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            
            <Grid item xs={12} md={4}>
            <TextField
              name="dur"
              variant="outlined"
              helperText="ej: 6 años"
              fullWidth
              size="small"
              label="Duración"
              value={inputField.dur}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <TextField
              name="des"
              variant="outlined"
              helperText="ej: Ene 2021"
              fullWidth
              size="small"
              label="Fecha que empezaste"
              value={inputField.des}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <TextField
              name="cul"
              variant="outlined"
              helperText="ej: Dic 2021"
              fullWidth
              size="small"
              label="Fecha que culminaste"
              value={inputField.cul}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
           
             
           
            <Grid item xs={12} md={6}>
            <Tooltip title="Quitar" placement="top">
            <IconButton
              disabled={edu.length === 1}
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

export default consumerFirebase(Educacion);
