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

class EditarCursos9 extends Component  {
  state = {
    datosp: {
      tit9: "", 
      ins9: "",
      dur9:"", 
      cul9: "",

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
      this.props.history.push("/curriculum/edit/" + id);
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
          <h1>9. Cursos de Capacitación</h1>
      <h3>Agrega sólo los cursos o capacitaciones relacionados al puesto, evita agregar cursos que no tengan relación con el puesto que vas a solicitar</h3>           <Grid container spacing={1}>
      
      <Grid item xs={12} md={6}>
            <TextField
              name="tit9"
              variant="outlined"
              helperText="ej: Ofimática Básica"
              fullWidth
              size="small"
              label="Certificado o titulo"
              value={this.state.datosp.tit9}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ins9"
              variant="outlined"
              fullWidth
              size="small"
              helperText="ej: SNPP"
              label="Institución/Página Web"
              value={this.state.datosp.ins9}
              onChange={this.cambiarDato} />
            </Grid>
            
            <Grid item xs={12} md={6}>
            <TextField
              name="dur9"
              variant="outlined"
              helperText="ej: 100 Horas"
              fullWidth
              size="small"
              label="Duración"
              value={this.state.datosp.dur9}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="cul9"
              variant="outlined"
              helperText="ej: Ene 2019"
              fullWidth
              size="small"
              label="Fecha que culminaste"
              value={this.state.datosp.cul9}
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

export default consumerFirebase(EditarCursos9);
