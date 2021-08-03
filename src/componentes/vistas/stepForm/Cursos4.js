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

class Cursos4 extends Component  {
  state = {
    datosp: {
      tit4: "", 
      ins4: "",
      dur4:"", 
      cul4: "",

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
          this.props.history.push("/add/cursos5/"+ id); 
      }) 

}

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
      
          <Papel>
          <h1>Otros cursos de capacitación</h1>
      <h3>Agrega sólo los cursos o capacitaciones relacionados al puesto, evita agregar cursos que no tengan relación con el puesto que vas a solicitar</h3>           <Grid container spacing={1}>
      
      <Grid item xs={12} md={6}>
            <TextField
              name="tit4"
              variant="outlined"
              helperText="ej: Ofimática Básica"
              fullWidth
              size="small"
              label="Certificado o titulo"
              value={this.state.datosp.tit4}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ins4"
              variant="outlined"
              fullWidth
              size="small"
              helperText="ej: SNPP"
              label="Institución/Página Web"
              value={this.state.datosp.ins4}
              onChange={this.cambiarDato} />
            </Grid>
            
            <Grid item xs={12} md={6}>
            <TextField
              name="dur4"
              variant="outlined"
              helperText="ej: 100 Horas"
              fullWidth
              size="small"
              label="Duración"
              value={this.state.datosp.dur4}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="cul4"
              variant="outlined"
              helperText="ej: Ene 2019"
              fullWidth
              size="small"
              label="Fecha que culminaste"
              value={this.state.datosp.cul4}
              onChange={this.cambiarDato}
            />
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
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  4
</Fab>

      <Tooltip title="Agregar Curso" placement="top">
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
      </Grid>
        </Papel>
        
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(Cursos4);
