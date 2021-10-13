import React, { Component } from "react";
import {
  Grid,
  TextField,
  Fab, Button,
} from "@material-ui/core";
import { consumerFirebase } from "../../server";
import Papel from "../Children/Papel";

const style = {
  load: {
    backgroundColor: "#4dabf5",
  },

  text: {
    marginBottom: 20,
  },
  submit: {
    marginLeft: 22,

  },
};

class EditarExp4 extends Component  {
  state = {
    datosp: {
      puesto4: "", 
      empre4: "", 
      ubicacion4: "",
      finicio4: "",
      ffinal4: "", 
      tareas4: "",

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
          <h1>4. Experiencia especifica</h1>
          <h3>Sólo experiencias relacionadas al puesto, empieza con las más recientes</h3>
            <Grid container spacing={1}>

            <Grid item xs={12} md={6}>
            <TextField
              name="empre4"
              variant="outlined"
              fullWidth
              size="small"
              label="Empresa / Institución"
              value={this.state.datosp.empre4}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="puesto4"
              variant="outlined"
              fullWidth
              size="small"
              label="Puesto"
              value={this.state.datosp.puesto4}
              onChange={this.cambiarDato}
            />
            </Grid>
            
            <Grid item xs={12} md={12}>
            <TextField
              name="ubicacion4"
              variant="outlined"
              fullWidth
              size="small"
              label="Ubicación"
              value={this.state.datosp.ubicacion4}
              onChange={this.cambiarDato}
            />
            </Grid>
             <Grid item xs={12} md={6}>
            <TextField
              name="finicio4"
              variant="outlined"
              fullWidth
              size="small"
              label="Desde fecha"
              value={this.state.datosp.finicio4}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ffinal4"
              variant="outlined"
              fullWidth
              size="small"
              label="Hasta fecha"
              value={this.state.datosp.ffinal4}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              style={style.text}
              name="tareas4"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
              label="Tareas o logros relevantes"
              value={this.state.datosp.tareas4}
              onChange={this.cambiarDato}
            />
            </Grid>
           
            </Grid>
          
            
            <Grid item xs={12} md={6}>
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
        </Papel>
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(EditarExp4);