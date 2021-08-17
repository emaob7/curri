import React, { Component } from "react";
import {
  Grid,
  TextField,  
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
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

class EditarIdiomas4 extends Component  {
  state = {
    datosp: {
      idi4: "", 
      niv4: "",
    

    },
    loading: false,
   
  };

  cambiarDato = e => {
    let datosp = Object.assign({}, this.state.datosp);
    datosp[e.target.name] = e.target.value;
    this.setState({datosp});
}

async componentDidMount() {
    const { id } = this.props.match.params;

    const datospCollection = this.props.firebase.db.collection("Datosps");
    const datospDB = await datospCollection.doc(id).get();

    this.setState({
      datosp: datospDB.data(),
    });
  }



 guardarDatosp = () => {
  const {datosp} = this.state;
  const {id} = this.props.match.params;

  this.props.firebase.db
      .collection("Datosps")
      .doc(id)
      .set(datosp, {merge: true})
     .then( success => {
        this.props.history.push("/curriculum/edit/" + id);
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
          this.props.history.push("/add/idiomas2/"+ id); 
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
          <h1>4. Idiomas</h1>
      <h3>Agrega idiomas relevantes para el puesto y tu nivel de manejo del idioma</h3>           
      
      <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="idi4"
                    variant="outlined"
                    helperText="ej: Inglés"
                    fullWidth
                    size="small"
                    label="Idioma"
                    value={this.state.datosp.idi4}
                    onChange={this.cambiarDato}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl style={{margin: 6, marginLeft: 16 }}>
                    <Select
                      name="niv4"
                      value={this.state.datosp.niv4}
                      onChange={this.cambiarDato}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Elija Nivel</em>
                      </MenuItem>
                      <MenuItem value="Nivel Básico">Nivel Básico</MenuItem>
                      <MenuItem value="Nivel Intermedio">Nivel Intermedio</MenuItem>
                      <MenuItem value="Nivel Avanzado">Nivel Avanzado</MenuItem>
                    </Select>
                    <FormHelperText>ej: Nivel Avanzado</FormHelperText>
                  </FormControl>
                </Grid>       
      

                
      <Fab 
      style={style.button} 
      color="primary" 
      aria-label="next" 
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
      </Grid>
        </Papel>
        
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(EditarIdiomas4);
