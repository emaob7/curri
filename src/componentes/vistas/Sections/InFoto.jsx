import React,{ useState }  from "react";
import { Container, Typography, Grid, Avatar, Button} from "@material-ui/core";
import reactFoto from "../../../logo.svg";
import {consumerFirebase} from '../../../server';
import ImageUploader from 'react-images-upload';
import {v4 as uuidv4} from "uuid";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AvatarCv from "../../Children/AvatarCv";



const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
  const [estado, cambiarEstado] = useState([{foto: ""}]);
  
  const firebase = props.firebase;
 

  

  const cambiarDato = e => {
      const {name, value} = e.target;
      cambiarEstado(prev => ({
          ...prev,
          [name] : value
      }))
  }


  const handleChange = (event) => {
    setPref({ ...pref, [event.target.name]: event.target.checked });
    if(disable.datos === true){
      setDisable({datos: false, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: true});
    }
  };

  
  const borrarfoto = () => {
    let imageRef = firebase.storage.refFromURL(fotog);
    imageRef.delete()
    firebase.db
    .collection("Datosps")
    .doc(id)
    .set(
      {
        foto : null
      },
      {merge: true}
    )
    .then(success => {
      setFotog(null)
    }) 

  }


 



  const subirFoto = fotos => {
    //1. Capturar la imagen
    const foto = fotos[0];
    //2. Renombrar la imagen
    const claveUnicaFoto = uuidv4();
    //3. Obtener el nombre de la foto 
    const nombreFoto = foto.name;
    //4. Obtener la extension de la imagen
    const extensionFoto = nombreFoto.split('.').pop();
    //5. Crear el nuevo nombre de la foto - alias
    const alias = (nombreFoto.split('.')[0] + "_" + claveUnicaFoto + "." + extensionFoto).replace(/\s/g,"_").toLowerCase();
    // V a xI.jpg  --->  v_a_xi_423454354423324423.jpg
    if (fotog != null) {
    let imageRef = firebase.storage.refFromURL(fotog);
    imageRef.delete()
    }
    firebase.guardarDocumento(alias, foto).then(metadata =>{
        firebase.devolverDocumento(alias).then(urlFoto=>{
          estado.foto = urlFoto;

          firebase.db
            .collection("Datosps")
            .doc(id)
            .set(
              {
                foto : urlFoto
              },
              {merge: true}
            )
            .then(success => {
              setFotog(urlFoto)
            }) 

        })

    })

  }

  let fotoKey = uuidv4();

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
     

        
        
          <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
          
          {pref.con?(
 <AvatarCv
 fotog={fotog}
 pref={pref}
 />
):<Avatar style={style.avatar}/>}

          {fotog?(
      <div style={style.div}>
       <Button
            color ="secondary" 
            onClick={borrarfoto}
            >
              borrar
            </Button>
      </div>
     ):null}
          
         
        
        
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
          <form style={style.form}>

          
        

            <Grid item xs={12} md={12}>
                <ImageUploader 
                  withIcon={false}
                  key={fotoKey}
                  singleImage={true}
                  buttonText="Elija su foto"
                  onChange={subirFoto}
                  imgExtension={[".jpg",".gif",".png", ".jpeg"]}
                  maxFileSize={5242880}
                />

            </Grid>
           

            </form>
          </Grid>
          
       
      </div>
    </Container>
    )
  
};

export default consumerFirebase(InFoto);