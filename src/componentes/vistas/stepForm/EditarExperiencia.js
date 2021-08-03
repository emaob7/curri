import React, { Component } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
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

  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};

class EditarExpEs extends Component {
  state = {
    datosp: {
      puesto: "", 
      empre: "", 
      ubicacion: "",
      finicio: "",
      ffinal: "", 
      tareas: "" 
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
      <Papel>
      <h1>Agrega tus experiencias especificas</h1>
      <h3>Sólo experiencias relacionadas al puesto, empieza con las más recientes</h3>
     
       
          <Paper >
            <Container >
              
            <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
            <h5> - {this.state.datosp.empre}</h5>
            </Grid>

            <Grid item xs={12} md={6}>
            <TextField
              name="empre"
              variant="outlined"
              fullWidth
              size="small"
              label="Empresa / Institución"
              value={this.state.datosp.empre}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="puesto"
              variant="outlined"
              fullWidth
              size="small"
              label="Puesto"
              value={this.state.datosp.puesto}
              onChange={this.cambiarDato}
            />
            </Grid>
            
            <Grid item xs={12} md={12}>
            <TextField
              name="ubicacion"
              variant="outlined"
              fullWidth
              size="small"
              label="Ubicación"
              value={this.state.datosp.ubicacion}
              onChange={this.cambiarDato}
            />
            </Grid>
             <Grid item xs={12} md={6}>
            <TextField
              name="finicio"
              variant="outlined"
              fullWidth
              size="small"
              label="Desde fecha"
              value={this.state.datosp.finicio}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ffinal"
              variant="outlined"
              fullWidth
              size="small"
              label="Hasta fecha"
              value={this.state.datosp.ffinal}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
              name="tareas"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
              label="Tareas o logros relevantes"
              value={this.state.datosp.tareas}
              onChange={this.cambiarDato}
            />
            </Grid>
           
            
            </Grid>
            </Container>
          </Paper>
        
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.guardarDatosp}
        >
          Guardar cambios
        </Button>
      

      
    </Papel>
    );
  }
}

export default consumerFirebase(EditarExpEs);
