import React from 'react';
import  Plantilla1  from './Plantilla1';
import  Plantilla2  from './Plantilla2';
import  Plantilla3  from './Plantilla3';
import  Plantilla4  from './Plantilla4';
import Plantilla5 from './Plantilla5';
import Plantilla6 from './plantilla6';

const style = {
  div:{
    margin: "auto"
  }
}

const Design = (props) => {
    const {datos,herra,idi,expe,gene,refe,cursos,educa,color,selectedIndex,fotog,pref} = props;

    

    function DesignContent(selectedIndex) {
        switch (selectedIndex) {
          case 0:
            return (
            <>
             
            </>);
            
          case 1:
            
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
      pref={pref}
      fotog={fotog}
      />
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
      pref={pref}
      fotog={fotog}
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
      pref={pref}
      fotog={fotog}
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
      pref={pref}
      fotog={fotog}
      />
           </>
            );
          case 5:
            return( 
            <>
            <Plantilla5 
      datos={datos}
      herra={herra}
      expe={expe}
      gene={gene}
      educa={educa}
      cursos={cursos}
      idi={idi}
      refe={refe}
      color={color}
      pref={pref}
      fotog={fotog}
      />
           </>
            );
            case 6:
            return( 
            <>
              <Plantilla6
              
      datos={datos}
      herra={herra}
      expe={expe}
      gene={gene}
      educa={educa}
      cursos={cursos}
      idi={idi}
      refe={refe}
      color={color}
      pref={pref}
      fotog={fotog}
      />
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
     {DesignContent(selectedIndex)}
     
    </div>
  );
};

export default Design;