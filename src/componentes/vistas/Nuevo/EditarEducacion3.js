import React, { Component } from "react";
import {
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import { consumerFirebase } from "../../../server";
import Papel from '../../Children/Papel';
import Fab from '@material-ui/core/Fab';

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

class EditarEducacion3 extends Component  {
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


  async componentDidMount() {
    const { id } = this.props.match.params;

    const datospCollection = this.props.firebase.db.collection("Datosps");
    const datospDB = await datospCollection.doc(id).get();

    this.setState({
      datosp: datospDB.data(),
    });
  }


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
          this.props.history.push("/curriculum/edit/"+ id); 
      }) 

}

handleCancelar = () => {
    const {id} = this.props.match.params;
    this.props.history.push("/curriculum/edit/" + id);
  };


  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
      
          <Papel>
      <h1>3. Educación</h1>
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
      
      </Grid>  
      <Fab 
      style={style.button} 
      color="primary" 
      aria-label="save" 
      size="medium" 
      variant="extended"
      onClick={this.guardarDatosp}
      >
        Guardar
      </Fab>
      <Button
  color="primary"
              size="medium"
              style={style.button}
              onClick={this.handleCancelar}
            >
              Cancelar
            </Button>
        </Papel>
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(EditarEducacion3);
