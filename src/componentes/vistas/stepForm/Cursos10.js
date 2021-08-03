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

class Cursos10 extends Component  {
  state = {
    datosp: {
      tit10: "", 
      ins10: "",
      dur10:"", 
      cul10: "",

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
          <h1>Otros cursos de capacitación</h1>
      <h3>Agrega sólo los cursos o capacitaciones relacionados al puesto, evita agregar cursos que no tengan relación con el puesto que vas a solicitar</h3>           <Grid container spacing={1}>
      
      <Grid item xs={12} md={6}>
            <TextField
              name="tit10"
              variant="outlined"
              helperText="ej: Ofimática Básica"
              fullWidth
              size="small"
              label="Certificado o titulo"
              value={this.state.datosp.tit10}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="ins10"
              variant="outlined"
              fullWidth
              size="small"
              helperText="ej: SNPP"
              label="Institución/Página Web"
              value={this.state.datosp.ins10}
              onChange={this.cambiarDato} />
            </Grid>
            
            <Grid item xs={12} md={6}>
            <TextField
              name="dur10"
              variant="outlined"
              helperText="ej: 100 Horas"
              fullWidth
              size="small"
              label="Duración"
              value={this.state.datosp.dur10}
              onChange={this.cambiarDato}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
              name="cul10"
              variant="outlined"
              helperText="ej: Ene 2019"
              fullWidth
              size="small"
              label="Fecha que culminaste"
              value={this.state.datosp.cul10}
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
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  5
</Fab>
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  6
</Fab>
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  7
</Fab>
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  8
</Fab>
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  9
</Fab>
<Fab disabled aria-label="like" 
      style={style.button} size="small">
  10
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
      </Grid>
        </Papel>
        
    </React.Fragment>

    
    );
  }
}

export default consumerFirebase(Cursos10);
