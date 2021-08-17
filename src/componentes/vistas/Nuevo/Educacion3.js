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

class Educacion3 extends Component  {
  state = {
    datosp: {
      tite3: "", 
      inse3: "",
      dure3:"",
      dese3:"", 
      cule3: ""

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
          this.props.history.push("/"); 
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
          this.props.history.push("/nuevo/educacion4/"+ id); 
      }) 

}

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
      
          <Papel>
      <h1>Agrega detalles de tu Educación</h1>
      <h3>Puedes empezar a agregar primero tu nivel Universitario, relacionado al puesto.</h3>
      <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="tite3"
              variant="outlined"
              helperText="ej: Ingenieria de Software"
              fullWidth
              size="small"
              label="Titulo obtenido"
              value={this.state.datosp.tite3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="inse3"
              variant="outlined"
              fullWidth
              size="small"
              helperText="ej: Universidad Nacional de Villarrica del Espiritu Santo"
              label="Institución/Universidad/Colegio"
              value={this.state.datosp.inse3}
              onChange={this.cambiarDato}
            />
            </Grid>
            
            <Grid item xs={12} md={4}>
            <TextField
              name="dure3"
              variant="outlined"
              helperText="ej: 6 años"
              fullWidth
              size="small"
              label="Duración"
              value={this.state.datosp.dure3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <TextField
              name="dese3"
              variant="outlined"
              helperText="ej: Ene 2021"
              fullWidth
              size="small"
              label="Fecha que empezaste"
              value={this.state.datosp.dese3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <TextField
              name="cule3"
              variant="outlined"
              helperText="ej: Dic 2021"
              fullWidth
              size="small"
              label="Fecha que culminaste"
              value={this.state.datosp.cule3}
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
      <Tooltip title="Agregar Educación" placement="top">
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

export default consumerFirebase(Educacion3);
