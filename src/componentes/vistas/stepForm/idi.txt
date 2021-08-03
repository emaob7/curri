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

const Idiomas = (props, { navigation }) => {
  const firebase = props.firebase;
  const classes = useStyles();
  const [idi, setIdi] = useState([{ id2: uuidv4(), idio: "", niv: "" }]);
  const arrayGu = []; //este

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (id2, event) => {
    const newIdi = idi.map((i) => {
      if (id2 === i.id2) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setIdi(newIdi);
  };

  const handleAddFields = () => {
    setIdi([...idi, { id2: uuidv4(), idio: "", niv: "" }]);
  };

  const handleRemoveFields = (id2) => {
    const values = [...idi];
    values.splice(
      values.findIndex((value) => value.id2 === id2),
      1
    );
    setIdi(values);
  };

  const guardarDatosp = () => {
    const inputF = { ...arrayGu, idi };
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
      <h1>Agrega Idiomas</h1>
      <h3>
        Puedes agregar Idiomas que conozcas, agrega en que nivel lo manejas
      </h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        {idi.map((inputField) => (
          <Paper key={inputField.id2} className={classes.div}>
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                  <h5> - {inputField.idio}</h5>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="idio"
                    variant="outlined"
                    helperText="ej: Inglés"
                    fullWidth
                    size="small"
                    label="Idioma"
                    value={inputField.idio}
                    onChange={(event) =>
                      handleChangeInput(inputField.id2, event)
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl style={{margin: 15}}>
                    <Select
                      name="niv"
                      value={inputField.niv}
                      onChange={(event) =>
                        handleChangeInput(inputField.id2, event)
                      }
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Elija Nivel</em>
                      </MenuItem>
                      <MenuItem value="Nivel Básico">Nivel Básico</MenuItem>
                      <MenuItem value="Nivel Intermedio">Nivel Intermedio</MenuItem>
                      <MenuItem value="Nivel Avanzado">Nivel Avanzado</MenuItem>
                    </Select>
                    <FormHelperText>ej: Nivel Avanzado</FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Tooltip title="Quitar" placement="top">
                    <IconButton
                      disabled={idi.length === 1}
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

export default consumerFirebase(Idiomas);
