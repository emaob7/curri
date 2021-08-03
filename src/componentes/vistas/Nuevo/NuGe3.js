import React, { Component } from "react";
import {
  Grid,
  TextField,
} from "@material-ui/core";
import { consumerFirebase } from "../../../server";
import Papel from '../../Children/Papel';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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

class NuGe3 extends Component  {
  state = {
    datosp: {
      puestg3: "", 
      emprg3: "", 
      ubicaciog3: "",
      finicig3: "",
      ffinag3: "", 
      tareag3: "",

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



  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
      
          <Papel>
          <h1>Agrega tus experiencias Generales</h1>
          <h3>Son aquellas experiencias que no tienen relación directa con el puesto al que postulas</h3>
            <Grid container spacing={1}>
      
            <Grid item xs={12} md={6}>
            <TextField
              name="emprg3"
              variant="outlined"
              fullWidth
              size="small"
              label="Empresa / Institución"
              value={this.state.datosp.emprg3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="puestg3"
              variant="outlined"
              fullWidth
              size="small"
              label="Puesto"
              value={this.state.datosp.puestg3}
              onChange={this.cambiarDato}
            />
            </Grid>
            
            <Grid item xs={12} md={12}>
            <TextField
              name="ubicaciog3"
              variant="outlined"
              fullWidth
              size="small"
              label="Ubicación"
              value={this.state.datosp.ubicaciog3}
              onChange={this.cambiarDato}
            />
            </Grid>
             <Grid item xs={12} md={6}>
            <TextField
              name="finicig3"
              variant="outlined"
              fullWidth
              size="small"
              label="Desde fecha"
              value={this.state.datosp.finicig3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ffinag3"
              variant="outlined"
              fullWidth
              size="small"
              label="Hasta fecha"
              value={this.state.datosp.ffinag3}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              style={style.text}
              name="tareag3"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
              label="Tareas o logros relevantes"
              value={this.state.datosp.tareag3}
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

export default consumerFirebase(NuGe3);
