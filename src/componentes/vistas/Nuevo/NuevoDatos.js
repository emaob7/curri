import React, { Component } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Fab,
} from "@material-ui/core";
import { consumerFirebase } from "../../../server";
import { v4 as uuidv4 } from "uuid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Papel from "../../Children/Papel";

const style = {
  load: {
    backgroundColor: "#4dabf5",
  },

  icon: {
    marginRight: 0.5,
    width: 20,
    height: 20,
  },

  div: {
    marginBottom: 22,
    backgroundColor: "#0071bc",
    width: 80,
    height: 5,
  },
  button: {
    marginTop: 22,
    marginRight: 17,
  },

  
};

class NuevoDatos extends Component {
  state = {
    datosp: {
      nom: "",
      ape: "",
      prof: "",
      cin: "",
      nprof: "",
      naci: "",
      fena: "",
      dir: "",
      tel: "",
      email: "",
      fotos: [],
    },
    archivos: [],
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
    const id = uuidv4();
    datosp.propietario = this.props.firebase.auth.currentUser.uid;
    
    this.props.firebase.db
        .collection("Datosps")
        .doc(id)
        .set(datosp, {merge: true})
        .then( success => {
            this.props.history.push("/nuevo/objetivo/" + id);
        })

}
handleCancelar = () => {
  this.props.history.push("/list/");
};
  render() {
    const { loading } = this.state;
    return (
      <Papel>
        <Typography variant="h6" gutterBottom>
          Información Personal
        </Typography>
        <div style={style.div}></div>

        <Grid container spacing={3}>
     
          <Grid item xs={12} md={6}>
            <TextField
              name="nom"
              label="Nombre"
              variant="outlined"
              helperText="ej: Emmanuel"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.nom}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="ape"
              label="Apellidos"
              variant="outlined"
              helperText="ej: Ortigoza Bordón"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.ape}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="cin"
              label="Numero de cedula - DNI"
              variant="outlined"
              helperText="ej: 5310779"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.cin}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="fena"
              type="date"
              label="Fecha de Nacimiento"
              variant="outlined"
              size="small"
              helperText="ej: 24/01/1992"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.cambiarDato}
              value={this.state.datosp.fena}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="prof"
              label="Profesión"
              variant="outlined"
              helperText="ej: Ingeniero de Sistemas"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.prof}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="nprof"
              label="Número de Reg. profesional"
              variant="outlined"
              helperText="ej: 235.279"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.nprof}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="naci"
              label="Nacionalidad"
              variant="outlined"
              helperText="ej: Paraguaya"
              fullWidth
              size="small"
              onChange={this.cambiarDato}
              value={this.state.datosp.naci}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              name="dir"
              label="Dirección"
              variant="outlined"
              size="small"
              helperText="ej: Calle Santa Rosa de Lima/ Humaita"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.dir}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="tel"
              label="Telefono"
              variant="outlined"
              size="small"
              helperText="ej: +595981745130"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.tel}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              variant="outlined"
              label="Correo electrónico"
              size="small"
              fullWidth
              onChange={this.cambiarDato}
              value={this.state.datosp.email}
              helperText="ej: emanuel@gmail.com"
            />
            {loading && <LinearProgress style={style.load} />}
          </Grid>

          <Grid item xs={12} md={6}>
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

export default consumerFirebase(NuevoDatos);
