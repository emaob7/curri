import React, { useState }from 'react';
import  Plantilla1  from './Plantilla1';
import  Plantilla2  from './Plantilla2';
import  Plantilla3  from './Plantilla3';
import  Plantilla4  from './Plantilla4';

const style = {
  div:{
    margin: "auto"
  }
}

const Design = (props) => {
    const {datos,herra,idi,expe,gene,refe,cursos,educa,color} = props;

    const [valor, setValor] = useState(3);

    function DesignContent(valor) {
        switch (valor) {
          case 0:
            return (
            <>
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
            </>);
            
          case 1:
            
            return (
              <>
             
            </>
            );
          case 2:
            return(
              <> 
           <Plantilla2 
      datos={datos}
      herra={herra}
      expe={expe}
      gene={gene}
      educa={educa}
      cursos={cursos}
      idi={idi}
      refe={refe}
      color={color}
      />
            </>
            );
          case 3:
            return ( 
            <>
            <Plantilla3 
      datos={datos}
      herra={herra}
      expe={expe}
      gene={gene}
      educa={educa}
      cursos={cursos}
      idi={idi}
      refe={refe}
      color={color}
      />
            
            </>
            );
          case 4:
            return( 
              <>
            <Plantilla4 
      datos={datos}
      herra={herra}
      expe={expe}
      gene={gene}
      educa={educa}
      cursos={cursos}
      idi={idi}
      refe={refe}
      color={color}
      />
           </>
            );
          case 5:
            return( 
            <>
            
           </>
            );
            case 6:
            return( 
            <>
             
           </>
            );
            case 7:
            return( 
            <>
             
           </>
            );
            case 8:
            return( 
            <>
            
           </>
            );
          default:
            throw new Error('Unknown step');
        }
      }

  return (
    <div style ={style.div}>
     {DesignContent(valor)}
     
    </div>
  );
};

export default Design;