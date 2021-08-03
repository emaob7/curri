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

const Cursos = ( props, {navigation} ) => {
  const firebase = props.firebase;
  const classes = useStyles();
  const [cur, setCur] = useState([
    { id2: uuidv4(), tit: "", ins: "",dur:"", cul: "" }
  ]);
  const arrayGu = []//este

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

  const handleChangeInput = (id2, event) => {
    const newCur = cur.map((i) => {
      if (id2 === i.id2) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setCur(newCur);
  };

  const handleAddFields = () => {
    setCur([
      ...cur,
      { id2: uuidv4(), tit: "", ins: "",dur:"", cul: ""},
    ]);
  };


  const handleRemoveFields = (id2) => {
    const values = [...cur];
    values.splice(
      values.findIndex((value) => value.id2 === id2),
      1
    );
    setCur(values);
  };

  const guardarDatosp = () => {
    const inputF = {...arrayGu, cur};
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
      <h1>Otros cursos de capacitación</h1>
      <h3>Agrega sólo los cursos o capacitaciones relacionados al puesto, evita agregar cursos que no tengan relación con el puesto que vas a solicitar</h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        {cur.map((inputField) => (
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
              helperText="ej: Ofimática Básica"
              fullWidth
              size="small"
              label="Certificado o titulo"
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
              helperText="ej: SNPP"
              label="Institución/Página Web"
              value={inputField.ins}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            
            <Grid item xs={12} md={6}>
            <TextField
              name="dur"
              variant="outlined"
              helperText="ej: 100 Horas"
              fullWidth
              size="small"
              label="Duración"
              value={inputField.dur}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="cul"
              variant="outlined"
              helperText="ej: Ene 2019"
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
              disabled={cur.length === 1}
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

export default consumerFirebase(Cursos);
