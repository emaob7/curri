import React, { Component } from "react";
import {
  Grid,
  TextField,
} from "@material-ui/core";
import { consumerFirebase } from "../../../server";
import Papel from '../../Children/Papel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Tooltip from '@material-ui/core/Tooltip';

const style = {
  load: {
    backgroundColor: "#4dabf5",
  },

  text: {
    marginBottom: 20,
  },
  button: {
    marginTop: 22,
    marginRight: 17,
  },
};

class NuEx3 extends Component  {
  state = {
    datosp: {
      puesto3: "", 
      empre3: "", 
      ubicacion3: "",
      finicio3: "",
      ffinal3: "", 
      tareas3: "",

    },
    loading: false,
   
  };

  cambiarDato = e => {
    let datosp = Object.assign({}, this.state.datosp);
    datosp[e.target.name] = e.target.value;
    this.setState({datosp});
}





 guardarDatosp = () => {
  const {datosp} = this.state;
  const {id} = this.props.match.params;

  this.props.firebase.db
      .collection("Datosps")
      .doc(id)
      .set(datosp, {merge: true})
     .then( success => {
          this.props.history.push("/nuevo/experienciag/"+ id); 
      }) 

}

guardarDatosA = () => {
  const {datosp} = this.state;
  const {id} = this.props.match.params;

  this.props.firebase.db
      .collection("Datosps")
      .doc(id)
      .set(datosp, {merge: true})
     .then( success => {
          this.props.history.push("/nuevo/experienciae4/"+ id); 
      }) 

}

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
      
          <Papel>
          <h1>Agrega tus experiencias especificas</h1>
          <h3>Sólo experiencias relacionadas al puesto, empieza con las más recientes</h3>
            <Grid container spacing={1}>
      
            <Grid item xs={12} md={6}>
            <TextField
              name="empre3"
              variant="outlined"
              fullWidth
              size="small"
              label="Empresa / Institución"
              value={this.state.datosp.empre3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="puesto3"
              variant="outlined"
              fullWidth
              size="small"
              label="Puesto"
              value={this.state.datosp.puesto3}
              onChange={this.cambiarDato}
            />
            </Grid>
            
            <Grid item xs={12} md={12}>
            <TextField
              name="ubicacion3"
              variant="outlined"
              fullWidth
              size="small"
              label="Ubicación"
              value={this.state.datosp.ubicacion3}
              onChange={this.cambiarDato}
            />
            </Grid>
             <Grid item xs={12} md={6}>
            <TextField
              name="finicio3"
              variant="outlined"
              fullWidth
              size="small"
              label="Desde fecha"
              value={this.state.datosp.finicio3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ffinal3"
              variant="outlined"
              fullWidth
              size="small"
              label="Hasta fecha"
              value={this.state.datosp.ffinal3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              style={style.text}
              name="tareas3"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
              label="Tareas o logros relevantes"
              value={this.state.datosp.tareas3}
              onChange={this.cambiarDato}
            />
            </Grid>
           
            </Grid>
            <Grid item xs={12}> 
      <Fab disabled aria-label="like" 
      style={style.button} size="small">
  1
</Fab>
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  2
</Fab>
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  3
</Fab>
      <Tooltip title="Agregar Experiencia" placement="top">
        <Fab
        style={style.button} 
        color="primary" 
        aria-label="add" 
        size="small" 
        onClick={this.guardarDatosA} >
        <AddIcon />
      </Fab>
      </Tooltip>
      </Grid>
                
      <Fab 
      style={style.button} 
      color="primary" 
      aria-label="next" 
      size="medium" 
      variant="extended"
      onClick={this.guardarDatosp}
      >
      <NavigateNextIcon />
        Siguiente
      </Fab>
        </Papel>
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(NuEx3);
