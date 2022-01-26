import React from "react";
import "../../../App.css";
import { Typography } from "@material-ui/core";


const style = {
  div: {
    minWidth: "816px",
    minHeight: "1300px",
    marginBottom: 22,
    marginRight: 17,
    paddingLeft: 37,
    paddingTop: 37,
  },
  body:{
    display: "flex",
    flexDirection: "row"
  },
  borderer:{
    borderBottom: "2px solid rgb(212, 212, 212)"
  },

  hero: ({color})=>({
    color: color,
    marginBottom: "0%",
  }),
  
  left: {
    width: "200px",
    paddingTop: "5px",
    borderTop: "2px solid rgb(212, 212, 212)",
    minHeight: "1200px",
    
  },
 
  right:{
    width: "500px",
    paddingLeft: "30px",
    paddingTop: "32px",
    borderTop: "2px solid rgb(212, 212, 212)"
  },
  parrafo:{
    marginLeft:"5%",
    marginBottom: "2%",
    color: "#757575"
  },
  parrafo2:{
    color: "#757575",
    marginRight:"20%",
  },
  ciudad:{
    color: "#616161",
    marginRight:"0",
  },
fecha:{
  color:"#616161",
  marginTop:"0%",
  display: "flex",
},
titulo: ({color})=>({
  color: color,
  display: "flex",
  marginTop: "-6%"
}),


}




const Plantilla3 = (props) => {
   const {datos,herra,idi,expe,gene,refe,cursos,educa,color} = props;
   
    return(
      <div style ={style.div}>
      {datos.map((card,i) => (
        <div key={i}>
        <Typography style ={style.hero({color:color})} variant="h4" gutterBottom>
        {card.nombre} 
      </Typography>
      <Typography style ={style.hero({color:color})} variant="h4" gutterBottom>
      {card.ape}
      </Typography>
      <Typography variant="overline" gutterBottom>
      {card.prof}
      </Typography>
      </div>
      ))}
        
      
      
      
  <div style={style.body}>
  <div style ={style.left}>
  {datos.map((card, i) => (
    <div style ={style.borderer} key={i}>
  <Typography  style ={{color:color}} variant="h6" gutterBottom>
        Datos Personales 
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      CIN: {card.cin}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Registro Profesional N°: {card.nprof}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Telefono: {card.tel}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Correo: {card.email}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Nacionalidad: {card.naci}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Fecha de Nacimiento: {card.fena}
      </Typography>
      </div>
      ))}  

      {herra[0].herrami? (
        <div style ={style.borderer}>
      <Typography style ={{color:color}} variant="h6" gutterBottom>
        Herramientas y Habilidades
      </Typography>
      {herra.map((card,i) => ( 
        <div key={i}> 
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {card.herrami} : {card.nivel}
      </Typography>
      </div>
       ))} 
      </div>
      ) : null}

      {idi[0].idioma ? (
        <div style ={style.borderer}>
      <Typography style ={{color:color}} variant="h6" gutterBottom>
        Idiomas
      </Typography>
      {idi.map((card, i) => (
        <div key={i}>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {card.idioma} : {card.nivel}
      </Typography>
      </div>
       ))} 
      </div>
      ) : null}

      {refe[0].referencia ? (
        <div style ={style.borderer}>
      <Typography style ={{color:color}} variant="h6" gutterBottom>
        Referencias
      </Typography>
      {refe.map((card, i) => (
      <div key={i}>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      {card.referencia} 
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      Telef.: {card.telef}
      </Typography>
      </div>
        ))} 
      </div>
      ) : null}     
  
  </div>
  
  <div style ={style.right}>
  {datos[0].perfil   ? (
    <div style={style.borderer}>
  <Typography style={style.titulo({color:color})} variant="h6" gutterBottom>
        Perfil
      </Typography> 
      <Typography  variant="body2" gutterBottom>
      {datos[0].perfil}
      </Typography>
      </div>
      ) : null} 
      
      {expe[0].puesto  ? (
        <div style={style.borderer}>
      <Typography style ={{color:color}}  variant="h6" gutterBottom>
        Experiencia Especifica
      </Typography>
      {expe.map((card,i) => (
        <div key={i}>
      <Typography variant="button" gutterBottom>
      {card.puesto}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {card.finicio},  hasta {card.ffinal},   {card.ubicacion}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {card.tareas}
      </Typography>
      </div>
      ))}
      </div>
      ) : null}

      {gene[0].puesto  ? (
        <div style={style.borderer}>
      <Typography style ={{color:color}} variant="h6" gutterBottom>
        Experiencia General
      </Typography>
      {gene.map((card,i) => (
        <div key={i}>
        <Typography variant="button" gutterBottom>
        {card.puesto}
        </Typography>
        <Typography style ={style.fecha} variant="body2" gutterBottom>
        Desde {card.finicio},  hasta {card.ffinal},   {card.ubicacion}
        </Typography>
        <Typography style ={style.parrafo} variant="body2" gutterBottom>
        {card.tareas}
        </Typography>
        </div>
      ))}
      </div>
      ) : null}


      {educa[0].titu  ? (
        <div style={style.borderer}>
      <Typography style ={{color:color}} variant="h6" gutterBottom>
        Educación
      </Typography>

      {educa.map((card,i) => (
        <div key={i}>
      <Typography variant="button" gutterBottom>
      {card.titu}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {card.insti}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {card.duracion}, concluido en {card.culminacion}
      </Typography>
      </div>
      ))}
      </div>
      ) : null}

       {cursos[0].titu  ? (
         <>
      <Typography style ={{color:color}} variant="h6" gutterBottom>
        Cursos y Capacitaciones
      </Typography>

      {cursos.map((card,i) => (
        <div key={i}>
      <Typography variant="button" gutterBottom>
      {card.titu}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {card.insti}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {card.duracion}, concluido en {card.culminacion}
      </Typography>
      </div>
      ))}
      
      </>
) : null}

      </div>
  </div>
      </div>
      ); 
    
    
  }  
  
  export default Plantilla3;
