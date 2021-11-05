import React, { useEffect, useState, useRef } from 'react';
import {Fab,
  AccordionSummary,
  Accordion, Typography, Grid, Tooltip} from "@material-ui/core";
import { useReactToPrint } from 'react-to-print';
import AccordionDetail from "@material-ui/core/AccordionDetails";
import { consumerFirebase } from "../../server";
import { useParams } from 'react-router-dom';
import InDatos from './Sections/InDatos';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import InPerfil from './Sections/InPerfil';
import InEspecifica from './Sections/InEspecifica';
import InEspecificaDos from './Sections/InEspecificaDos';
import InEducacion from './Sections/InEducacion';
import InIdioma from './Sections/InIdioma';
import InHerramienta from './Sections/InHerramienta';
import InReferencia from './Sections/InReferencia';
import InCursos from './Sections/InCursos';
import SnackGreen from '../Children/SnackGreen';
import AccordionActions from "@material-ui/core/AccordionActions";
import Hecho from '../Children/Hecho';
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
  corner: {
    marginRight: 10,
    position: 'absolute',
  bottom: 16,
  right: 16,
  },
  cornerLeft: {
    marginRight: 10,
    position: 'absolute',
  bottom: 16,
  right: 516,
  },
  fab: {
    marginRight: 10,
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
    
  },
  summary: {
    backgroundColor: "#FFF"
  },
  details: {
    backgroundColor: "#F3F6F9",
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
    width: "30%",
    height: "545px",
    marginTop: 80,
    paddingTop: "5px",
    overflowY:"scroll",
    overflowX: "hidden",
    
  },

  right:{
    width: "70%",
    height: "545px",
    marginTop: 80,
    padding: "10px",
    paddingTop: "32px",
    overflowY:"scroll",
    overflowX: "hidden",
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
    const [expanded, setExpanded] = useState('');
    const [open, setOpen] = useState(false);
    const [disable, setDisable] = useState(initialState);
    const [value, setValue] = useState(70);
    let { id } = useParams();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
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
 

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };
  
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


  return (
    <>
    <div style={style.left}>
     
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} style={style.summary}>
          <Typography variant="h6" gutterBottom>
          Información Personal
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.acordeon}>
          <InDatos 
          datos={datos}
          change ={change}
          guardarDatos ={guardarDatos}
           
          />
          
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.datos}
            guardar={guardarDatos}
            />
          </AccordionActions>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Perfil
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.acordeon}>
          <InPerfil 
          datos={datos}
          change ={change}/>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.datos}
            guardar={guardarDatos}
            />
          </AccordionActions>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Experiencias Especificas
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InEspecificaDos
          expe={expe}
          handleInputChange={handleInputChange}
          handleRemoveClick={handleRemoveClick}
          handleAddClick={handleAddClick}
          />
         
          </Grid>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.expe}
            guardar={guardarExpe}
            />
          </AccordionActions>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Experiencias Generales
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
           
          <InEspecifica
          gene={gene}
          handleInputChangeg={handleInputChangeg}
          handleRemoveClickg={handleRemoveClickg}
          handleAddClickg={handleAddClickg}
          /> 
          
          </Grid>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.gene}
            guardar={guardarGene}
            />
          </AccordionActions>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Educación
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InEducacion
           educa={educa}
           handleInputChangeE={handleInputChangeE}
           handleRemoveClickE={handleRemoveClickE}
           handleAddClickE={handleAddClickE}
          />
         
         </Grid>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.educa}
            guardar={guardarEduca}
            />
          </AccordionActions>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Cursos y Capacitaciones
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InCursos
           cursos={cursos}
           handleInputChangeC={handleInputChangeC}
           handleRemoveClickC={handleRemoveClickC}
           handleAddClickC={handleAddClickC}
          />
         
         </Grid>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.cursos}
            guardar={guardarCursos}
            />
          </AccordionActions>
        </Accordion>

        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Idiomas
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>

          <InIdioma
           idi={idi}
           handleInputChangei={handleInputChangei}
           handleRemoveClicki={handleRemoveClicki}
           handleAddClicki={handleAddClicki}
          />
          
          </Grid>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.idi}
            guardar={guardarIdiomas}
            />
          </AccordionActions>
        </Accordion>


        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Herramientas y Habilidades
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InHerramienta
          herra={herra}
          handleInputChangeH={handleInputChangeH}
          handleRemoveClickH={handleRemoveClickH}
          handleAddClickH={handleAddClickH}
          />
          
           
         </Grid>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.herra}
            guardar={guardarHerra}
            />
          </AccordionActions>
        </Accordion>

        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Referencia
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          
          <InReferencia
          refe={refe}
          handleInputChangeR={handleInputChangeR}
          handleRemoveClickR={handleRemoveClickR}
          handleAddClickR={handleAddClickR}
          />

         </Grid>
          </AccordionDetail>
          <AccordionActions>
            <Hecho
            disable ={disable.refe}
            guardar={guardarRefe}
            />
          </AccordionActions>
        </Accordion>

            <SnackGreen
            open={open}
            handleClose={handleClose}
            mensaje="Guardado con éxito"

            />

    
</div>
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
      <div style={style.corner}>
      <Tooltip title={value} placement="left">
     <Fab  
              style={style.fab}
              size="medium"
              onClick={()=>{setValue(value + 10)}}
            >
              <ZoomInIcon/>
     </Fab>
     </Tooltip>
     <Tooltip title={value} placement="left">
     <Fab  
              style={style.fab}
              size="medium"
              onClick={()=>{setValue(value - 10)}}
            >
              <ZoomOutIcon/>
     </Fab>
     </Tooltip>
      <Tooltip title="Diseño" placement="left">
     <Fab 
              
              style={style.fab}
              size="medium"
              color="primary"
              onClick={""}
            >
              <PaletteOutlinedIcon/>
     </Fab>
     </Tooltip>
     <Tooltip title="Descargar" placement="left">
     <Fab  
              style={style.fab}
              size="medium"
              color="primary"
              onClick={handlePrint}
            >
              <SaveAltOutlinedIcon/>
     </Fab>
     </Tooltip>
     
     </div>
     
  </div>
    </>
  );
};

export default consumerFirebase(CurriculumEdit);