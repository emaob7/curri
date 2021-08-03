import React, { Component } from "react";
import {
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { consumerFirebase } from "../../../server";

const style = {
  load: {
    backgroundColor: "#4dabf5",
  },

  text: {
    marginBottom: 20,
  },
  button: {
    margin: 22,
  },
};

class ExperienciaE4 extends Component  {
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





 guardarDatosp = () => {
  const {datosp} = this.state;
 const idDoc = this.props.id;
 
  this.props.firebase.db
      .collection("Datosps")
      .doc(idDoc)
      .set(datosp, {merge: true})
     /* .then( success => {
          this.props.history.push("/nuevo/experienciag/"+ idDoc); 
      }) */

}

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
      
          
              
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
          
        
        <Button
          style={style.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.guardarDatosp}
        >
          Guardar cambios
        </Button>
      
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(ExperienciaE4);
