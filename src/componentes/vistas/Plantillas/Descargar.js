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



  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style ={style.div}>
      <Papel>
      <Plantilla1 ref={componentRef} datos={datos}/>
      </Papel>
      <Button onClick={handlePrint}>Print this out!</Button>
    </div>
  );
};

export default consumerFirebase(Descargar);