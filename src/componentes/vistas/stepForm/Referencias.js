import React, { useState } from "react";
import { consumerFirebase } from "../../../server";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Papel from "../../Children/Papel";
import {
  Container,
  Grid,
  Paper,
  Tooltip,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  div: {
    backgroundColor: "#fff59d",
    marginBottom: theme.spacing(2),
  },
}));

const Referencias = (props, { navigation }) => {
  const firebase = props.firebase;
  const classes = useStyles();
  const [refe, setRefe] = useState([{ id2: uuidv4(), nom: "", tel: "" }]);
  const arrayGu = []; //este

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (id2, event) => {
    const newRefe = refe.map((i) => {
      if (id2 === i.id2) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setRefe(newRefe);
  };

  const handleAddFields = () => {
    setRefe([...refe, { id2: uuidv4(), nom: "", tel: "" }]);
  };

  const handleRemoveFields = (id2) => {
    const values = [...refe];
    values.splice(
      values.findIndex((value) => value.id2 === id2),
      1
    );
    setRefe(values);
  };

  const guardarDatosp = () => {
    const inputF = { ...arrayGu, refe };
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
      <h1>Agrega Referencias</h1>
      <h3>
        Agrega sólo en caso que consideres necesario. 
      </h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        {refe.map((inputField) => (
          <Paper key={inputField.id2} className={classes.div}>
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                  <h5> - {inputField.nom}</h5>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="nom"
                    variant="outlined"
                    helperText="ej: Hugo Ortigoza Bordón"
                    fullWidth
                    size="small"
                    label="Nombre completo"
                    value={inputField.nom}
                    onChange={(event) =>
                      handleChangeInput(inputField.id2, event)
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <TextField
                    name="tel"
                    variant="outlined"
                    helperText="ej: +595981471503"
                    fullWidth
                    size="small"
                    label="Teléfono"
                    value={inputField.tel}
                    onChange={(event) =>
                      handleChangeInput(inputField.id2, event)
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Tooltip title="Quitar" placement="top">
                    <IconButton
                      disabled={refe.length === 1}
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

export default consumerFirebase(Referencias);
