import React, { Component } from "react";
import {
  Grid,
  TextField,
} from "@material-ui/core";
import { consumerFirebase } from "../../../server";
import Papel from '../../Children/Papel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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

class Referencias extends Component  {
  state = {
    datosp: {
      ref1: "", 
      tel1: "",
      ref2:"", 
      tel2: "",

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
          <h1>Referencias</h1>
      <h3>Agrega sólo si consideras necesario</h3>           
      <Grid container spacing={1}>
      
      <Grid item xs={12} md={6}>
            <TextField
              name="ref1"
              variant="outlined"
              helperText="ej: Hugo César Ortigoza"
              fullWidth
              size="small"
              label="1- Referencia"
              value={this.state.datosp.ref1}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="tel1"
              variant="outlined"
              fullWidth
              size="small"
              helperText="ej: +595981745130"
              label="Teléfono"
              value={this.state.datosp.tel1}
              onChange={this.cambiarDato} />
            </Grid>
            
            <Grid item xs={12} md={6}>
            <TextField
              name="ref2"
              variant="outlined"
              helperText="ej: Dra. Luisa Bordón"
              fullWidth
              size="small"
              label="2- Referencia"
              value={this.state.datosp.ref2}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="tel2"
              variant="outlined"
              helperText="ej: 0983454586"
              fullWidth
              size="small"
              label="Teléfono"
              value={this.state.datosp.tel2}
              onChange={this.cambiarDato}
            />
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

      </Grid>
        </Papel>
        
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(Referencias);
