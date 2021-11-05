import React, { useRef, useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import  Plantilla1  from './Plantilla1';
import Papel from '../../Children/Papel';
import { Button } from '@material-ui/core';
import { consumerFirebase } from "../../../server";
import { useParams } from 'react-router-dom';


const style = {
  div:{
    margin: "auto"
  }
}

const Descargar = (props) => {

  const firebase = props.firebase;
   // const [loading, setLoading] = useState(true);
   const [datos, setDatos] = useState([{perfil: "",nombre: "",ape: "",cin: "",fena: "",prof: "",nprof: "",naci: "",dir: "",tel: "",email: ""}]);
   const [expe, setExpe] = useState([{empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""}]);
   const [gene, setGene] = useState([{empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""}]);
   const [educa, setEduca] = useState([{titu: "", insti: "",duracion: "", culminacion: "" }]);
   const [cursos, setCursos] = useState([{titu: "", insti: "",duracion: "", culminacion: "" }]);
   const [idi, setIdi] = useState([{idioma: "", nivel: ""}]);
   const [herra, setHerra] = useState([{herrami: "", nivel: ""}]);
   const [refe, setRefe] = useState([{referencia: "", telef: ""}]);
    let { id } = useParams();

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




  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style ={style.div}>
      <Papel>
      <Plantilla1 
      ref={componentRef}
      datos={datos}
      herra={herra}
      expe={expe}
      gene={gene}
      educa={educa}
      cursos={cursos}
      idi={idi}
      refe={refe}
      />
      </Papel>
      <Button onClick={handlePrint}>Imprimir</Button>
    </div>
  );
};

export default consumerFirebase(Descargar);