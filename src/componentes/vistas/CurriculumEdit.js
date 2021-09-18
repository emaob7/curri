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
import InEducacion from './Sections/InEducacion';
import InIdioma from './Sections/InIdioma';

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
}

const CurriculumEdit = (props) => {

  const firebase = props.firebase;
   // const [loading, setLoading] = useState(true);
    const [datos, setDatos] = useState({});
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


    const guardarDatos = async () => {
        await firebase.db.collection("Datosps")
        .doc(id)
        .set(datos, {merge: true})
        
    }



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
          change ={change} />
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
            
          <InEspecifica
          puestop='puesto'
          emprep='empre'
          ubicacionp='ubicacion'
          finiciop='finicio'
          ffinalp='ffinal'
          tareasp='tareas' 
          puesto={datos.puesto}
          empre={datos.empre}
          ubicacion={datos.ubicacion}
          finicio={datos.finicio}
          ffinal={datos.ffinal}
          tareas={datos.tareas}
          change ={change} />
          
          <InEspecifica
          puestop='puesto2'
          emprep='empre2'
          ubicacionp='ubicacion2'
          finiciop='finicio2'
          ffinalp='ffinal2'
          tareasp='tareas2' 
          puesto={datos.puesto2}
          empre={datos.empre2}
          ubicacion={datos.ubicacion2}
          finicio={datos.finicio2}
          ffinal={datos.ffinal2}
          tareas={datos.tareas2}
          change ={change} />
          <InEspecifica
          puestop='puesto3'
          emprep='empre3'
          ubicacionp='ubicacion3'
          finiciop='finicio3'
          ffinalp='ffinal3'
          tareasp='tareas3' 
          puesto={datos.puesto3}
          empre={datos.empre3}
          ubicacion={datos.ubicacion3}
          finicio={datos.finicio3}
          ffinal={datos.ffinal3}
          tareas={datos.tareas3}
          change ={change} />
          <InEspecifica 
          puestop='puesto4'
          emprep='empre4'
          ubicacionp='ubicacion4'
          finiciop='finicio4'
          ffinalp='ffinal4'
          tareasp='tareas4'
          puesto={datos.puesto4}
          empre={datos.empre4}
          ubicacion={datos.ubicacion4}
          finicio={datos.finicio4}
          ffinal={datos.ffinal4}
          tareas={datos.tareas4}
          change ={change} />
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
          puestop='puestog'
          emprep='empreg'
          ubicacionp='ubicaciong'
          finiciop='finiciog'
          ffinalp='ffinalg'
          tareasp='tareasg'  
          puesto={datos.puestog}
          empre={datos.empreg}
          ubicacion={datos.ubicaciong}
          finicio={datos.finiciog}
          ffinal={datos.ffinalg}
          tareas={datos.tareasg}
          change ={change} />
          
          <InEspecifica
          puestop='puestg2'
          emprep='emprg2'
          ubicacionp='ubicaciog2'
          finiciop='finicig2'
          ffinalp='ffinag2'
          tareasp='tareag2'   
          puesto={datos.puestg2}
          empre={datos.emprg2}
          ubicacion={datos.ubicaciog2}
          finicio={datos.finicig2}
          ffinal={datos.ffinag2}
          tareas={datos.tareag2}
          change ={change} />
          <InEspecifica
           puestop='puestg3'
           emprep='emprg3'
           ubicacionp='ubicaciog3'
           finiciop='finicig3'
           ffinalp='ffinag3'
           tareasp='tareag3'  
          puesto={datos.puestg3}
          empre={datos.emprg3}
          ubicacion={datos.ubicaciog3}
          finicio={datos.finicig3}
          ffinal={datos.ffinag3}
          tareas={datos.tareag3}
          change ={change} />
         
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
          <InEducacion
         
         tite='tite2'
         inse='inse2'
         dure='dure2'
         cule='cule2'
         titulo={datos.tite2}
         institucion={datos.inse2}
         duracion={datos.dure2}
         culminacion={datos.cule2}
         change ={change}
         />
         <InEducacion
         
         tite='tite3'
         inse='inse3'
         dure='dure3'
         cule='cule3'
         titulo={datos.tite3}
         institucion={datos.inse3}
         duracion={datos.dure3}
         culminacion={datos.cule3}
         change ={change}
         />
         <InEducacion
         
         tite='tite4'
         inse='inse4'
         dure='dure4'
         cule='cule4'
         titulo={datos.tite4}
         institucion={datos.inse4}
         duracion={datos.dure4}
         culminacion={datos.cule4}
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
         <InEducacion
         
         tite='tit3'
         inse='ins3'
         dure='dur3'
         cule='cul3'
         titulo={datos.tit3}
         institucion={datos.ins3}
         duracion={datos.dur3}
         culminacion={datos.cul3}
         change ={change}
         />
         <InEducacion
         tite='tit4'
         inse='ins4'
         dure='dur4'
         cule='cul4'
         titulo={datos.tit4}
         institucion={datos.ins4}
         duracion={datos.dur4}
         culminacion={datos.cul4}
         change ={change}
         />
         <InEducacion
         tite='tit5'
         inse='ins5'
         dure='dur5'
         cule='cul5'
         titulo={datos.tit5}
         institucion={datos.ins5}
         duracion={datos.dur5}
         culminacion={datos.cul5}
         change ={change}
         />
         <InEducacion
         tite='tit6'
         inse='ins6'
         dure='dur6'
         cule='cul6'
         titulo={datos.tit6}
         institucion={datos.ins6}
         duracion={datos.dur6}
         culminacion={datos.cul6}
         change ={change}
         />
         <InEducacion
         tite='tit7'
         inse='ins7'
         dure='dur7'
         cule='cul7'
         titulo={datos.tit7}
         institucion={datos.ins7}
         duracion={datos.dur7}
         culminacion={datos.cul7}
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
          />
          <InIdioma
          idi='idi2'
          niv='niv2'
          idioma={datos.idi2}
          nivel={datos.niv2}
          />
          <InIdioma
          idi='idi3'
          niv='niv3'
          idioma={datos.idi3}
          nivel={datos.niv3}
          />
          <InIdioma
          idi='idi4'
          niv='niv4'
          idioma={datos.idi4}
          nivel={datos.niv4}
          />
          <InIdioma
          idi='idi5'
          niv='niv5'
          idioma={datos.idi5}
          nivel={datos.niv5}
          />
        
         </Grid>
          </AccordionDetail>
        </Accordion>


      </Papel>





      <Fab
              variant="contained"
              size="medium"
              color="primary"
              onClick={guardarDatos}
            >
              Guardar
            </Fab>
    </div>
  );
};

export default consumerFirebase(CurriculumEdit);