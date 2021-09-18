import React, { Component } from "react";
import { Grid, Typography, TextField, Fab, Button } from "@material-ui/core";
import { consumerFirebase } from "../../server";
import { openMensajePantalla } from "../../sesion/actions/snackbarAction";
import Papel from "../Children/Papel";

const style = {
  load: {
    backgroundColor: "#4dabf5",
  },

  submit: {
    marginLeft: 22,

  },
};

class EditarResumen extends Component {
  state = {
    datosp: {
      obje: "",
    },

    loading: false,
  };

  cambiarDato = e => {
    let datosp = Object.assign({}, this.state.datosp);
    datosp[e.target.name] = e.target.value;
    this.setState({datosp});
}


async componentDidMount() {
  const {id} = this.props.match.params;
  
  const datospCollection = this.props.firebase.db.collection("Datosps");
  const datospDB = await datospCollection.doc(id).get();

  this.setState({
    datosp : datospDB.data()
  })

}

guardarDatosp = () => {
  const {datosp} = this.state;
  const {id} = this.props.match.params;

  datosp.propietario = this.props.firebase.auth.currentUser.uid;
  
  this.props.firebase.db
      .collection("Datosps")
      .doc(id)
      .set(datosp, {merge: true})
      .then( success => {
        this.props.history.push("/curriculum/edit/" + id);
      })

}
  
handleCancelar = () => {
  const {id} = this.props.match.params;
  this.props.history.push("/curriculum/edit/" + id);
};
 

  render() {
    const { loading } = this.state;
    return (
      <Papel>
        <Typography variant="h6" gutterBottom>
          Agregue su objetivo Profesional,o su interes en trabajar en la Empresa
        </Typography>
        <div style={style.div}></div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              name="obje"
              label="Objetivo Profesional"
              variant="outlined"
              helperText="ej: Quiero trabajar en la Empresa para ayudar al excelente equipo y aprender de ellos"
              size="small"
              multiline
              rows={5}
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.obje}
            />
          </Grid>

          <Grid item xs={6} md={6}>
          <Fab
              variant="contained"
              size="medium"
              color="primary"
              onClick={this.guardarDatosp}
            >
              Guardar
            </Fab>
            <Button
              color="primary"
              size="medium"
              style={style.submit}
              onClick={this.handleCancelar}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Papel>
    );
  }
}

export default consumerFirebase(EditarResumen);
