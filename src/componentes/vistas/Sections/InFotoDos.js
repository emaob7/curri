import React from 'react';
import {consumerFirebase} from '../../../server';
import {v4 as uuidv4} from "uuid";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ButtonGroup, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    group: {
      marginTop: 12,
      marginBottom: 45,
    },
  }));

function InFotoDos(props) {
  const {fotog,setFotog,id,pref, setPref,disable, setDisable, ...other } = props;
  const firebase = props.firebase;
  const [archivoUrl, setArchivoUrl] = React.useState("");
  

  const archivoHandler = async (e)=> {
    const nombreArchivo = uuidv4();
    const archivo = e.target.files[0];
    const storageRef = firebase.storage.ref();
    const archivoPath = storageRef.child(nombreArchivo);
    await archivoPath.put(archivo);
    console.log("archivo cargado:",archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
    //desde aqui
    const coleccionRef =  firebase.db.collection("Datosps");
    const docu = await coleccionRef.doc(id).set({
    foto : enlaceUrl
  },
  {merge: true}).then(success => {
    setFotog(enlaceUrl)
  })

  }


  const changePhoto = async (e)=> {
    const imageRef = firebase.storage.refFromURL(fotog);
    imageRef.delete();
    const nombreArchivo = uuidv4();
    const archivo = e.target.files[0];
    const storageRef = firebase.storage.ref();
    const archivoPath = storageRef.child(nombreArchivo);
    await archivoPath.put(archivo);
    console.log("archivo cargado:",archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
    //desde aqui
    const coleccionRef =  firebase.db.collection("Datosps");
    const docu = await coleccionRef.doc(id).set({
    foto : enlaceUrl
  },
  {merge: true}).then(success => {
    setFotog(enlaceUrl)
  })

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

  const submitHandler = async (e)=> {
    e.preventDefault()
const coleccionRef =  firebase.db.collection("Datosps");
const docu = await coleccionRef.doc(id).set({
    foto : archivoUrl
  },
  {merge: true}).then(success => {
    setFotog(archivoUrl)
  }) 

  }
  const classes = useStyles();
  

  return (
    <>
    <ButtonGroup className={classes.group} size="small" aria-label="small outlined button group">
    {!fotog ?(
     <div className={classes.root}>
      <input
        onChange={archivoHandler}
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button size="small" startIcon={<AddAPhotoIcon/>}  color="primary" component="span">
         Subir Foto
        </Button>
      </label>
    </div>):<>
    <div className={classes.root}>
      <input
        onChange={changePhoto}
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button size="small" startIcon={<AddAPhotoIcon/>}  color="primary" component="span">
         Cambiar
        </Button>
      </label>
    </div>
    <Tooltip title="Borrar foto" aria-label="delete" placement="top">
<Button
  color="secondary"
  aria-label="delete"
  onClick={borrarfoto}
  startIcon={<DeleteForeverIcon/>}
  >
  </Button>           
  </Tooltip>
  </>}
  </ButtonGroup>
    </>
  );
}

export default consumerFirebase(InFotoDos);