import React, { Component } from "react";
import { Grid, Typography, TextField, Fab, Button } from "@material-ui/core";
import { consumerFirebase } from "../../../server";
import LinearProgress from "@material-ui/core/LinearProgress";
import Papel from "../../Children/Papel";

const style = {
  load: {
    backgroundColor: "#4dabf5",
  },
  button: {
    marginTop: 22,
    marginRight: 17,
  },
};

class NuevoObs extends Component {
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
          this.props.history.push("/nuevo/experienciae/" + id);
      })

}
handleOmitir = () => {
  const {id} = this.props.match.params;
  this.props.history.push("/nuevo/experienciae/" + id);
};
  

  render() {
    const { loading } = this.state;
    return (
      <Papel>
        <Typography variant="h6" gutterBottom>
          Agregue su objetivo Profesional,o su interes en trabajar en la Empresa
        </Typography>
        
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
      style={style.button} 
      color="primary" 
      aria-label="save" 
      size="medium" 
      variant="extended"
      onClick={this.guardarDatosp}
      >
        Continuar
      </Fab>
      <Button
  color="primary"
              size="medium"
              style={style.button}
              onClick={this.handleOmitir}
            >
              Omitir
            </Button>
          </Grid>
        </Grid>
      </Papel>
    );
  }
}

export default consumerFirebase(NuevoObs);
