import React, { useRef } from "react";
import "../../../App.css";
import { useReactToPrint } from "react-to-print";
import Plantilla1 from "../../../componentes/vistas/Plantillas/Plantilla1";

const Estilos = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Plantilla1 ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Estilos;