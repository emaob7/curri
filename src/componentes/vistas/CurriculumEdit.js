import React, { useRef, useEffect, useState } from 'react';
import {Fab,
  AccordionSummary,
  Accordion, Typography, Grid} from "@material-ui/core";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import { consumerFirebase } from "../../server";
import { useParams } from 'react-router-dom';
import Papel from '../Children/Papel';
import InDatos from './Sections/InDatos';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InPerfil from './Sections/InPerfil';
import InEspecifica from './Sections/InEspecifica';
import InEspecificaDos from './Sections/InEspecificaDos';
import InEducacion from './Sections/InEducacion';
import InIdioma from './Sections/InIdioma';
import InHerramienta from './Sections/InHerramienta';
import InReferencia from './Sections/InReferencia';


const style = {
  
  div:{
    margin: "auto"
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

}

const CurriculumEdit = (props) => {

  const firebase = props.firebase;
   // const [loading, setLoading] = useState(true);
 
    const [datos, setDatos] = useState({});
    const [value, setValue] = useState('');
    const [expe, setExpe] = useState([{ empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: "" }]);
    const [gene, setGene] = useState([{empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""}]);


    let { id } = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await firebase.db
                .collection("Datosps")
                .doc(id)
                .get();

                let data = { nom: 'not found' };
                if (response.exists) {
                    data = response.data();
                }
                setDatos(data);
                setGene(data.gene);
                
           //     setLoading(false);
            } catch(err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    const change = (e) => {
      const {name, value} = e.target;
      setDatos({...datos, [name]:value})
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const guardarDatos1 = async () => {
      
        await firebase.db.collection("Datosps")
        .doc(id)
        .set(datos, {merge: true})
        
    }

    const guardarGene = async () => {
      await firebase.db.collection("Datosps")
      .doc(id)
      .set((Object.assign({}, {gene})),{merge: true})
  }


  const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...expe];
      list[index][name] = value;
      setExpe(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClick = index => {
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
      const { name, value } = e.target;
      const list = [...gene];
      list[index][name] = value;
      setGene(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClickg = index => {
      const list = [...gene];
      list.splice(index, 1);
      setGene(list);
    };
  
    // handle click event of the Add button
    const handleAddClickg = () => {
      setGene([...gene, { empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""  }]);
    };

  return (
    
    <div style ={style.div}>
      <Papel>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} style={style.summary}>
          <Typography variant="h6" gutterBottom>
          Información Personal
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.acordeon}>
          <InDatos 
          datos={datos}
          change ={change} 
          />
          </AccordionDetail>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Perfil
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.acordeon}>
          <InPerfil 
          datos={datos}
          change ={change} />
          </AccordionDetail>
        </Accordion>

        <Accordion>
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
        </Accordion>
        <Accordion>
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
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Educación
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InEducacion
          tite='tite'
          inse='inse'
          dure='dure'
          cule='cule'
          titulo={datos.tite}
          institucion={datos.inse}
          duracion={datos.dure}
          culminacion={datos.cule}
          change ={change}
          />
         
         </Grid>
          </AccordionDetail>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Cursos y Capacitaciones
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InEducacion
          tite='tit'
          inse='ins'
          dure='dur'
          cule='cul'
          titulo={datos.tit}
          institucion={datos.ins}
          duracion={datos.dur}
          culminacion={datos.cul}
          change ={change}
          />
          <InEducacion
         
         tite='tit2'
         inse='ins2'
         dure='dur2'
         cule='cul2'
         titulo={datos.tit2}
         institucion={datos.ins2}
         duracion={datos.dur2}
         culminacion={datos.cul2}
         change ={change}
         />
         
         </Grid>
          </AccordionDetail>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Idiomas
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InIdioma
          idi='idi'
          niv='niv'
          idioma={datos.idi}
          nivel={datos.niv}
          change ={change}
          />
          <InIdioma
          idi='idi2'
          niv='niv2'
          idioma={datos.idi2}
          nivel={datos.niv2}
          change ={change}
          />
          
         </Grid>
          </AccordionDetail>
        </Accordion>


        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Herramientas y Habilidades
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          <InHerramienta
          her='her'
          nive='nive'
          herramienta={datos.her}
          nivel={datos.nive}
          change ={change}
          />
          <InHerramienta
          her='her2'
          nive='nive2'
          herramienta={datos.her2}
          nivel={datos.nive2}
          change ={change}
          />
           
         </Grid>
          </AccordionDetail>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom>
          Referencia
        </Typography>
          </AccordionSummary>
          <AccordionDetail style={style.details}>
          <Grid container spacing={2}>
          
          <InReferencia
          refe='ref1'
          tel='tel1'
          referencia={datos.ref1}
          telefono={datos.tel1}
          change ={change}
          />
           <InReferencia
          refe='ref2'
          tel='tel2'
          referencia={datos.ref2}
          telefono={datos.tel2}
          change ={change}
          />

        
         </Grid>
          </AccordionDetail>
        </Accordion>
      </Papel>
      <Fab  
              variant="extended"
              size="medium"
              color="primary"
              onClick={guardarGene}
            >
              Guardar
            </Fab>
    </div>
  );
};

export default consumerFirebase(CurriculumEdit);