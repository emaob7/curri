import React, { Component } from "react";
import {
  Grid,
  TextField,  
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
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

class Herramientas5 extends Component  {
  state = {
    datosp: {
      her5: "", 
      nive5: "",
    

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
          <h1>Herramientas</h1>
      <h3>Agrega herramientas e indica con que nivel manejas el mismo, no olvides agregar herramientas que te hagan destacar de los demás postulantes.</h3>           
      
      <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="her5"
                    variant="outlined"
                    helperText="ej: Photoshop, Microsoft Word, Excel"
                    fullWidth
                    size="small"
                    label="Herramienta"
                    value={this.state.datosp.her5}
                    onChange={this.cambiarDato}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl style={{margin: 6, marginLeft: 16 }}>
                    <Select
                      name="nive5"
                      value={this.state.datosp.nive5}
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

export default consumerFirebase(Herramientas5);
