import React, { useEffect, useState, useRef } from 'react';
import {Grid, Tabs, Tab, Box, Hidden} from "@material-ui/core";
import { useReactToPrint } from 'react-to-print';
import { consumerFirebase } from "../../server";
import { useParams } from 'react-router-dom';
import InDatos from './Sections/InDatos';
import InPerfil from './Sections/InPerfil';
import InEspecifica from './Sections/InEspecifica';
import InEspecificaDos from './Sections/InEspecificaDos';
import InEducacion from './Sections/InEducacion';
import InIdioma from './Sections/InIdioma';
import InHerramienta from './Sections/InHerramienta';
import InReferencia from './Sections/InReferencia';
import InCursos from './Sections/InCursos';
import SnackGreen from '../Children/SnackGreen';
import Hecho from '../Children/Hecho';
import Corner from '../Children/Corner';
import Plantilla1 from '../vistas/Plantillas/Plantilla1'
import {Zoom, Scale} from 'react-scaling'
import PapelDos from '../Children/PapelDos';
import PapelClass from '../Children/PapelClass';
import Plantilla3 from './Plantillas/Plantilla3';


const style = {
  
  div:{
    margin: "auto",
    overflowY:"scroll",
  },
 
  cornerLeft: {
    marginRight: 10,
    position: 'absolute',
  bottom: 16,
  right: 516,
  },
  
  summary: {
    backgroundColor: "#FFF"
  },
  details: {
    backgroundColor: "#F3F6F9",
  },
  bar: {
    backgroundColor: "#e8eaed",
    width: "100%",
    flexDirection: "wrap"
  },
  chips: {
    margin: "auto",
    marginBottom: 7,
    marginTop: 7,
  },
  button: {
    margin: "auto",
    marginTop: 10,
  },
  left: {
  //  width: "98%",
    height: "545px",
    marginTop: 58,
    paddingTop: "5px",
    overflowY:"scroll",
    overflowX: "hidden",
    backgroundColor: "white"
  },
  right:{
   // width: "65%",
    height: "545px",
    marginTop: 58,
    padding: "10px",
    paddingTop: "32px",
    overflowY:"scroll",
    overflowX: "hidden",
  },
  box:{
     marginTop: 20,
     padding: "15px",
     minHeight: "530px",
   },

}

const CurriculumEdit = (props) => {

  const firebase = props.firebase;
   // const [loading, setLoading] = useState(true);
   const initialState = {datos: true, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: true};
    const [datos, setDatos] = useState([{perfil: "",nombre: "",ape: "",cin: "",fena: "",prof: "",nprof: "",naci: "",dir: "",tel: "",email: ""}]);
    const [expe, setExpe] = useState([{empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""}]);
    const [gene, setGene] = useState([{empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""}]);
    const [educa, setEduca] = useState([{titu: "", insti: "",duracion: "", culminacion: "" }]);
    const [cursos, setCursos] = useState([{titu: "", insti: "",duracion: "", culminacion: "" }]);
    const [idi, setIdi] = useState([{idioma: "", nivel: ""}]);
    const [herra, setHerra] = useState([{herrami: "", nivel: ""}]);
    const [refe, setRefe] = useState([{referencia: "", telef: ""}]);
    const [valor, setValor] = useState(0);
    const [open, setOpen] = useState(false);
    const [disable, setDisable] = useState(initialState);
    const [value, setValue] = useState(70);
    let { id } = useParams();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    const handleTabChange = (event, newValor) => {
      setValor(newValor);
    };

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await firebase.db
                .collection("Datosps")
                .doc(id)
                .get();

                let data = { nombre: 'not found' };
                if (response.exists) {
                    data = response.data();
                }
                if (data.datos) {
                  setDatos(data.datos);
                };
                if (data.expe) {
                  setExpe(data.expe);
                };
                if (data.gene) {
                  setGene(data.gene);
                };
                if (data.educa) {
                  setEduca(data.educa);
                };
                if (data.cursos) {
                  setCursos(data.cursos);
                };
                if (data.idi) {
                  setIdi(data.idi);
                };
                if (data.herra) {
                  setHerra(data.herra);
                };
                if (data.refe) {
                  setRefe(data.refe);
                };
           //     setLoading(false);
            } catch(err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
 

  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };





const guardarDatos = async () => {
        await firebase.db.collection("Datosps")
        .doc(id)
        .set((Object.assign({}, {datos})),{merge: true})
        .then(success =>{
          setDisable(initialState);
          setOpen(true);
      })
      //  .set(datos, {merge: true})
          
         // setExpanded('');
    }

const guardarExpe = async () => {
      await firebase.db.collection("Datosps")
      .doc(id)
      .set((Object.assign({}, {expe})),{merge: true})
      .then(success =>{
        setDisable(initialState);
        setOpen(true);
    })
  }
const guardarGene = async () => {
      await firebase.db.collection("Datosps")
      .doc(id)
      .set((Object.assign({}, {gene})),{merge: true})
      .then(success =>{
        setDisable(initialState);
        setOpen(true);
    })
  }
const guardarEduca = async () => {
      await firebase.db.collection("Datosps")
      .doc(id)
      .set((Object.assign({}, {educa})),{merge: true})
      .then(success =>{
        setDisable(initialState);
        setOpen(true);
    })
}
const guardarCursos = async () => {
      await firebase.db.collection("Datosps")
      .doc(id)
      .set((Object.assign({}, {cursos})),{merge: true})
      .then(success =>{
        setDisable(initialState);
        setOpen(true);
    })
}
const guardarIdiomas = async () => {
  await firebase.db.collection("Datosps")
  .doc(id)
  .set((Object.assign({}, {idi})),{merge: true})
  .then(success =>{
    setDisable(initialState);
    setOpen(true);
})
}
const guardarHerra = async () => {
  await firebase.db.collection("Datosps")
  .doc(id)
  .set((Object.assign({}, {herra})),{merge: true})
  .then(success =>{
    setDisable(initialState);
    setOpen(true);
})
}
const guardarRefe = async () => {
  await firebase.db.collection("Datosps")
  .doc(id)
  .set((Object.assign({}, {refe})),{merge: true})
  .then(success =>{
    setDisable(initialState);
    setOpen(true);
})
}

const change = (e, index) => {
  if(disable.datos === true){
    setDisable({datos: false, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: true});
  }
  const { name, value } = e.target;
  const list = [...datos];
  list[index][name] = value;
  setDatos(list);
};


  const handleInputChange = (e, index) => {
    if(disable.expe === true){
      setDisable({datos: true, expe: false, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: true});
    }
      const { name, value } = e.target;
      const list = [...expe];
      list[index][name] = value;
      setExpe(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      if(disable.expe === true){
        setDisable({datos: true, expe: false, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: true});
      }
      const list = [...expe];
      list.splice(index, 1);
      setExpe(list);
    };
  
    // handle click event of the Add button
    const handleAddClick = () => {
      setExpe([...expe, { empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: "" }]);
    };

    //Generales

    const handleInputChangeg = (e, index) => {
      if(disable.gene === true){
        setDisable({datos: true, expe: true, gene: false,educa: true,cursos: true,idi: true,herra: true,refe: true});
      }
      const { name, value } = e.target;
      const list = [...gene];
      list[index][name] = value;
      setGene(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClickg = index => {
      if(disable.gene === true){
        setDisable({datos: true, expe: true, gene: false,educa: true,cursos: true,idi: true,herra: true,refe: true});
      }
      const list = [...gene];
      list.splice(index, 1);
      setGene(list);
    };
  
    // handle click event of the Add button
    const handleAddClickg = () => {
      setGene([...gene, { empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""  }]);
    };

    //Educacion
    const handleInputChangeE = (e, index) => {
      if(disable.educa === true){
        setDisable({datos: true, expe: true, gene: true,educa: false,cursos: true,idi: true,herra: true,refe: true});
      }
      const { name, value } = e.target;
      const list = [...educa];
      list[index][name] = value;
      setEduca(list);
    };
    // handle click event of the Remove button
    const handleRemoveClickE = index => {
      if(disable.educa === true){
        setDisable({datos: true, expe: true, gene: true,educa: false,cursos: true,idi: true,herra: true,refe: true});
      }
      const list = [...educa];
      list.splice(index, 1);
      setEduca(list);
    };
    // handle click event of the Add button
    const handleAddClickE = () => {
      setEduca([...educa, { titu: "", insti: "",duracion: "", culminacion: "" }]);
    };

    //Cursos
    const handleInputChangeC = (e, index) => {
      if(disable.cursos === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: false,idi: true,herra: true,refe: true});
      }
      const { name, value } = e.target;
      const list = [...cursos];
      list[index][name] = value;
      setCursos(list);
    };
    // handle click event of the Remove button
    const handleRemoveClickC = index => {
      if(disable.cursos === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: false,idi: true,herra: true,refe: true});
      }
      const list = [...cursos];
      list.splice(index, 1);
      setCursos(list);
    };
    // handle click event of the Add button
    const handleAddClickC = () => {
      setCursos([...cursos, { titu: "", insti: "",duracion: "", culminacion: "" }]);
    };


    //Idioma
    const handleInputChangei = (e, index) => {
      if(disable.idi === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: true,idi: false,herra: true,refe: true});
      }
      const { name, value } = e.target;
      const list = [...idi];
      list[index][name] = value;
      setIdi(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClicki = index => {
      if(disable.idi === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: true,idi: false,herra: true,refe: true});
      }
      const list = [...idi];
      list.splice(index, 1);
      setIdi(list);
    };
  
    // handle click event of the Add button
    const handleAddClicki = () => {
      setIdi([...idi, { idioma: "", nivel: "" }]);
    };

    //herramientas2
    const handleInputChangeH = (e, index) => {
      if(disable.herra === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: false,refe: true});
      }
      const { name, value } = e.target;
      const list = [...herra];
      list[index][name] = value;
      setHerra(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClickH = index => {
      if(disable.herra === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: false,refe: true});
      }
      const list = [...herra];
      list.splice(index, 1);
      setHerra(list);
    };
  
    // handle click event of the Add button
    const handleAddClickH = () => {
      setHerra([...herra, {herrami: "", nivel: ""}]);
    };

    //referencias
    const handleInputChangeR = (e, index) => {
      if(disable.refe === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: false});
      }
      const { name, value } = e.target;
      const list = [...refe];
      list[index][name] = value;
      setRefe(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClickR = index => {
      if(disable.refe === true){
        setDisable({datos: true, expe: true, gene: true,educa: true,cursos: true,idi: true,herra: true,refe: false});
      }
      const list = [...refe];
      list.splice(index, 1);
      setRefe(list);
    };
  
    // handle click event of the Add button
    const handleAddClickR = () => {
      setRefe([...refe, {referencia: "", telef: ""}]);
    };


    function getStepContent(valor) {
      switch (valor) {
        case 0:
          return (
          <>
          <InDatos 
          datos={datos}
          change ={change}
          />
          <Hecho
            disable ={disable.datos}
            guardar={guardarDatos}
            />
          </>);
          
        case 1:
          
          return (
            <>
           <InPerfil 
          datos={datos}
          change ={change}/>
            <Hecho
            disable ={disable.datos}
            guardar={guardarDatos}
            />
          </>
          );
        case 2:
          return(
            <> 
         <InEspecificaDos
          expe={expe}
          handleInputChange={handleInputChange}
          handleRemoveClick={handleRemoveClick}
          handleAddClick={handleAddClick}
          />
            <Hecho
            disable ={disable.expe}
            guardar={guardarExpe}
            />
          </>
          );
        case 3:
          return ( 
          <>
          <InEspecifica
          gene={gene}
          handleInputChangeg={handleInputChangeg}
          handleRemoveClickg={handleRemoveClickg}
          handleAddClickg={handleAddClickg}
          /> 
            <Hecho
            disable ={disable.gene}
            guardar={guardarGene}
            />
          </>
          );
        case 4:
          return( 
            <>
          <InEducacion
           educa={educa}
           handleInputChangeE={handleInputChangeE}
           handleRemoveClickE={handleRemoveClickE}
           handleAddClickE={handleAddClickE}
          />
            <Hecho
            disable ={disable.educa}
            guardar={guardarEduca}
            />
         </>
          );
        case 5:
          return( 
          <>
          <InCursos
           cursos={cursos}
           handleInputChangeC={handleInputChangeC}
           handleRemoveClickC={handleRemoveClickC}
           handleAddClickC={handleAddClickC}
          />
            <Hecho
            disable ={disable.cursos}
            guardar={guardarCursos}
            />
         </>
          );
          case 6:
          return( 
          <>
           <InIdioma
           idi={idi}
           handleInputChangei={handleInputChangei}
           handleRemoveClicki={handleRemoveClicki}
           handleAddClicki={handleAddClicki}
          />
            <Hecho
            disable ={disable.idi}
            guardar={guardarIdiomas}
            />
         </>
          );
          case 7:
          return( 
          <>
           <InHerramienta
          herra={herra}
          handleInputChangeH={handleInputChangeH}
          handleRemoveClickH={handleRemoveClickH}
          handleAddClickH={handleAddClickH}
          />
            <Hecho
            disable ={disable.herra}
            guardar={guardarHerra}
            />
         </>
          );
          case 8:
          return( 
          <>
           <InReferencia
          refe={refe}
          handleInputChangeR={handleInputChangeR}
          handleRemoveClickR={handleRemoveClickR}
          handleAddClickR={handleAddClickR}
          />
            <Hecho
            disable ={disable.refe}
            guardar={guardarRefe}
            />
         </>
          );
        default:
          throw new Error('Unknown step');
      }
    }
  return (
    <>
    <Grid container spacing={1}>
      <Grid item xs={12} md={5}>
    <div style={style.left}>
    <Box style={style.bar}>
    <Tabs
        value={valor}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Información Personal" wrapped/>
        <Tab label="Perfil" wrapped/>
        <Tab label="Experiencias Específicas" wrapped/>
        <Tab label="Experiencias Generales" wrapped/>
        <Tab label="Educación" wrapped/>
        <Tab label="Cursos Realizados" wrapped/>
        <Tab label="Idiomas" wrapped/>
        <Tab label="Herramientas y Habilidades" wrapped/>
        <Tab label="Referencias" wrapped/>
      </Tabs>
      </Box>
<Box style={style.box}>
      {getStepContent(valor)}
      </Box>
            <SnackGreen
            open={open}
            handleClose={handleClose}
            mensaje="Guardado con éxito"
            />

    
</div>
      </Grid>
      <Hidden smDown>
      <Grid item xs={12} md={7}>
<div style={style.right}>

<Zoom zoom={value}>
  <PapelDos>
    <PapelClass ref={componentRef}>

    <Plantilla1
    datos={datos}
    herra={herra}
    expe={expe}
    gene={gene}
    educa={educa}
    cursos={cursos}
    idi={idi}
    refe={refe}
    />
    </PapelClass>
   {/* <Plantilla3
    datos={datos}/>*/}
      </PapelDos>
      </Zoom>
      <Corner
      value={value}
      setValue={setValue}
      handlePrint={handlePrint}
      />
     
  </div>
      </Grid>
</Hidden>
    </Grid>
    
    </>
  );
};

export default consumerFirebase(CurriculumEdit);