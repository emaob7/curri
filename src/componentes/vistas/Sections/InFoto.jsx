import React,{ useState }  from "react";
import { Container, Typography, Grid, Avatar, Button} from "@material-ui/core";
import reactFoto from "../../../logo.svg";
import {consumerFirebase} from '../../../server';
import ImageUploader from 'react-images-upload';
import {v4 as uuidv4} from "uuid";


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
  input: {
    display: 'none',
  },
  avatar : {
    margin: 10,
    width : 100,
    height: 100

  }
};

const InFoto = props => {
  const {fotog,setFotog,id, ...other } = props;
  const [estado, cambiarEstado] = useState([{foto: ""}]); 
  const firebase = props.firebase;
 

  

  const cambiarDato = e => {
      const {name, value} = e.target;
      cambiarEstado(prev => ({
          ...prev,
          [name] : value
      }))
  }

  
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
        <Avatar style={style.avatar} src={fotog || reactFoto} />
        <Typography component="h1" variant="h5">
          Elija una fotografia
        </Typography>

        
        <form style={style.form}>
          <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Button 
            onClick={borrarfoto}
            >
              borrar
            </Button>
          </Grid>

            <Grid item xs={12} md={12}>
                <ImageUploader 
                  withIcon={false}
                  key={fotoKey}
                  singleImage={true}
                  buttonText="Seleccione su imagen de perfil"
                  onChange={subirFoto}
                  imgExtension={[".jpg",".gif",".png", ".jpeg"]}
                  maxFileSize={5242880}
                />

            </Grid>


          </Grid>
          
        </form>
      </div>
    </Container>
    )
  
};

export default consumerFirebase(InFoto);