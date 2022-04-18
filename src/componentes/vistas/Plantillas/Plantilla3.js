import React from "react";
import "../../../App.css";
import { Typography } from "@material-ui/core";
import AvatarCv from "../../Children/AvatarCv";


const style = {
  div: {
    minWidth: "816px",
    minHeight: "1300px",
    marginBottom: 22,
    marginRight: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
  },
  left: {
    width: "260px",
    marginLeft: 5,
    marginTop: 13,
    paddingLeft: 10,
    paddingRight: 15,
   // borderTop: "2px solid rgb(212, 212, 212)",
   // backgroundColor: "#fafafa",
    minHeight: "1200px",
    
  },
  avatar:{
    margin: "auto",
    marginTop: 15,
    alignItems: "center",
  },
  
  right:{
    width: "600px",
    paddingLeft: "20px",
    marginTop: 0,
   // borderTop: "2px solid rgb(212, 212, 212)"
  },
  body:{
    display: "flex",
    flexDirection: "row"
  },
  body2:{
    display: "flex",
    flexDirection: "column"
  },
  super:{
    //marginBottom: 10,
   // paddingLeft: 30,
    paddingBottom:2,
    letterSpacing: "1.5pt",
    textTransform: "uppercase",
    fontSize: "11px",
    textAlign:"center",
  },
  overlay:{
    marginTop: -13,
    marginBottom: 10,
    fontSize: "12px",
    //textTransform: "uppercase",
    letterSpacing: "1pt",
    textAlign:"center",
    //paddingBottom:10,
  },
  borderer:{
    borderBottom: "2px solid rgb(212, 212, 212)",
    paddingBottom: 10,
    marginBottom: 5,
  },
  subtitle:{
    //marginTop: 10,
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: "2pt",
    fontSize: "12px",
   paddingBottom:3,
   //paddingTop:5,
  },

  subtitle2:{
    //marginTop: 10,
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: "2pt",
    fontSize: "12px",
    paddingBottom:3,
   //paddingTop:5,
  },
/*
  hero: ({color})=>({
    color: color,
    marginBottom: "0%",
  }),

  <Typography style ={style.hero({color:color})} variant="h4" gutterBottom>
        {card.nombre} 
      </Typography>
  */

  
 
titulo: ({color})=>({
  color: color,
  display: "flex",
  marginTop: "-6%"
}),
interer:{
  marginTop: 2,
  marginBottom: "0%",
  fontSize: "14px",
  letterSpacing: "1pt",
},


}




const Plantilla3 = (props) => {
   const {datos,herra,idi,expe,gene,refe,cursos,educa,color,fotog,pref} = props;
   
    return(
      <div style ={style.div} className="plantilla4">
      <div style ={style.body2}>
  <did  style={style.avatar}>
      <AvatarCv
      fotog={fotog}
      pref={pref}
      />   
  </did>
        
      {datos.map((card, i) => (
        <div style ={style.super} key={i}>
        <h2>{card.nombre}{card.ape}</h2>
      <h5 style={style.overlay}>
      {card.prof}
      </h5>
      </div>
      ))}
  </div>
      
      
      
  <div style={style.body}>
  
  
  <div style ={style.right}>
  {datos[0].perfil   ? (
    <>
  <h6  style ={style.subtitle}>
        Perfil
      </h6>
      <div style={style.borderer}>
      <p style={style.interer}>
      {datos[0].perfil}
      </p>
      </div>
      </>
      ) : null} 
      
      {expe[0].puesto  ? (
        <div style={style.borderer}>
      <h4 style ={style.subtitle2}>
        Experiencia Especifica
      </h4>
      {expe.map((card,i) => (
        <div key={i}>
      <h5 style={style.interer}>
      {card.puesto}
      </h5>
      <p style={style.interer}>
      Desde {card.finicio},  hasta {card.ffinal},   {card.ubicacion}
      </p>
      <p style={style.interer}>
      {card.tareas}
      </p>
      </div>
      ))}
      </div>
      ) : null}

      {gene[0].puesto  ? (
        <div style={style.borderer}>
      <h4 style ={style.subtitle2}>
        Experiencia General
      </h4>
      {gene.map((card,i) => (
        <div key={i}>
        <h5 style={style.interer}>
        {card.puesto}
        </h5>
        <p style={style.interer}>
        Desde {card.finicio},  hasta {card.ffinal},   {card.ubicacion}
        </p>
        <p style={style.interer}>
        {card.tareas}
        </p>
        </div>
      ))}
      </div>
      ) : null}


      {educa[0].titu  ? (
        <div style={style.borderer}>
      <h4  style ={style.subtitle2}>
        Educación
      </h4>

      {educa.map((card,i) => (
        <div key={i}>
      <h5 style={style.interer}>
      {card.titu}
      </h5>
      <h5 style={style.interer}>
      {card.insti}
      </h5>
      <p style={style.interer}>
      Duración {card.duracion}, concluido en {card.culminacion}
      </p>
      </div>
      ))}
      </div>
      ) : null}

       {cursos[0].titu  ? (
         <>
      <h4 style ={style.subtitle2}>
        Cursos y Capacitaciones
      </h4>

      {cursos.map((card,i) => (
        <div key={i}>
      <h5 style={style.interer}>
      {card.titu}
      </h5>
      <p style={style.interer}>
      {card.insti}
      </p>
      <p style={style.interer}>
      Duración {card.duracion}, concluido en {card.culminacion}
      </p>
      </div>
      ))}
      
      </>
) : null}

      </div>
      <div style ={style.left}>
  {datos.map((card, i) => (
    <div style ={style.borderer} key={i}>
  <h4  style ={style.subtitle2}>
        Datos Personales 
      </h4>
      <p style={style.interer}>
      CIN: {card.cin}
      </p>
      <p style={style.interer}>
      Registro Profesional N°: {card.nprof}
      </p>
      <p style={style.interer}>
      Telefono: {card.tel}
      </p>
      <p style={style.interer}>
      Correo: {card.email}
      </p>
      <p style={style.interer}>
      Nacionalidad: {card.naci}
      </p>
      <p style={style.interer}>
      Fecha de Nacimiento: {card.fena}
      </p>
      </div>
      ))}  

      {herra[0].herrami? (
        <div style ={style.borderer}>
      <h4 style ={style.subtitle2}>
        Herramientas y Habilidades
      </h4>
      {herra.map((card,i) => ( 
        <div key={i}> 
      <p style={style.interer}>
      {card.herrami} : {card.nivel}
      </p>
      </div>
       ))} 
      </div>
      ) : null}

      {idi[0].idioma ? (
        <div style ={style.borderer}>
      <h4 style ={style.subtitle2}>
        Idiomas
      </h4>
      {idi.map((card, i) => (
        <div key={i}>
      <p style={style.interer}>
      {card.idioma} : {card.nivel}
      </p>
      </div>
       ))} 
      </div>
      ) : null}

      {refe[0].referencia ? (
        <div style ={style.borderer}>
      <h4 style ={style.subtitle2}>
        Referencias
      </h4>
      {refe.map((card, i) => (
      <div key={i}>
      <p style={style.interer}>
      {card.referencia} 
      </p>
      <p style={style.interer}>
      Telef.: {card.telef}
      </p>
      </div>
        ))} 
      </div>
      ) : null}     
  
  </div>
  </div>
      </div>
      ); 
    
    
  }  
  
  export default Plantilla3;
