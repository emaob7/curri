import React,{ useState }  from "react";
import { Container, Grid, Avatar,ButtonGroup,Tooltip} from "@material-ui/core";
import {consumerFirebase} from '../../../server';
import {v4 as uuidv4} from "uuid";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AvatarCv from "../../Children/AvatarCv";
import InFotoDos from "./InFotoDos";



const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  group: {
    marginTop: 12,
    marginBottom: 45,
  },
  form: {
    width: "100%",
    marginTop: 20
  },
  submit: {
    marginTop: 15,
    marginBottom: 20
  }, 
  avatar : {
    margin: 10,
    width : 100,
    height: 100
  },
  div:{
   marginLeft:15,
  }
};

const InFoto = props => {
  const {fotog,setFotog,id,pref, setPref,disable, setDisable, ...other } = props;
  const firebase = props.firebase;
 
  const handleChange = (event) => {
    setPref({ ...pref, [event.target.name]: event.target.checked });
    if(disable.datos === true){
      setDisable({datos: false, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: true});
    }
  };

  
  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
          <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
 {pref.con && fotog ?(           
 <AvatarCv
 fotog={fotog}
 pref={pref}
 />
):<Avatar style={style.avatar}/>}
<InFotoDos
style={style.group}
id={id}
fotog={fotog}
setFotog={setFotog}
pref={pref}
setPref={setPref}
disable ={disable}
setDisable={setDisable}
/>

          </Grid>
          <Grid item xs={6} md={6}>
          
          <FormControl component="fieldset">
    <FormLabel component="legend">Preferencias</FormLabel>
    <FormGroup>
      <FormControlLabel
        control={<Switch color="primary" checked={pref.con} onChange={handleChange} name="con" />}
        label="Con Fotografia"
      />
      <FormControlLabel
        control={<Switch color="primary" checked={pref.cuadrado} onChange={handleChange} name="cuadrado" />}
        label="Cuadrado"
      />
      
      
    </FormGroup>
  </FormControl>
          </Grid>
          </Grid>
          
       
      </div>
    </Container>
    )
  
};

export default consumerFirebase(InFoto);