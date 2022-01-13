import React from "react";
import "../../../App.css";
import RoomIcon from '@material-ui/icons/Room';


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
  //  borderBottom: "2px solid rgb(212, 212, 212)",
    
    marginBottom:7,
    //paddingLeft:7,
  },
  borderer2:{
    //  borderBottom: "2px solid rgb(212, 212, 212)",
      marginBottom:7,
      paddingBottom:7,
     // paddingLeft:5,
    },

 
  
  left: {
    width: "200px",
    paddingTop: "5px",
    paddingLeft: 15,
    paddingRight: 15,
   // borderTop: "2px solid rgb(212, 212, 212)",
   // backgroundColor: "#fafafa",
    minHeight: "1200px",
    
  },
 
  interer:{
    marginTop: 2,
    marginBottom: "0%",
  },
  lign:{
float:"right",
marginTop: -5,
  },
   super:{
    //marginBottom: 10,
    paddingLeft: 15,
    paddingBottom:10,
    letterSpacing: "1pt",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  overlay:{
    marginTop: -15,
    marginBottom: "0%",
    fontSize: "12px",
    //textTransform: "uppercase",
    letterSpacing: "1pt",
  },
  subtitle:{
    marginTop: 19,
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: "1pt",
    //textAlign:"center",
    //textDecoration:"blink",
    //color: "#263238",
    backgroundColor:"#eeeeee",
    float:"center",
    padding:10,
  },
  subtitle2:{
    marginTop: 19,
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: "1pt",
    //textAlign:"center",
    //textDecoration:"blink",
    //color: "#263238",
    backgroundColor:"#eeeeee",
    float:"center",
    padding:10,
  },
  intertitle:{
    marginTop: 8,
    marginBottom: 0,
   // textTransform: "uppercase",
   fontSize: "14px",
    letterSpacing: "1pt",
    //color: "#616161"

  },
  intertitle2:{
    marginTop: 4,
    marginBottom: 0,
   // textTransform: "uppercase",
   fontSize: "12px",
    letterSpacing: "1pt",
  },

  right:{
    width: "500px",
    paddingLeft: "20px",
    paddingTop: 6,
   // borderTop: "2px solid rgb(212, 212, 212)"
  },
  icon:{
    width:14,
    marginBottom:-8,
    marginRight:2,
    color: "gray",
  }
}




const Plantilla4 = (props) => {
   const {datos,herra,idi,expe,gene,refe,cursos,educa,color} = props;
   
    return(
      <div style ={style.div} className="plantilla4">
        
      {datos.map((card, i) => (
        <div style ={style.super} key={i}>
        <h1>
        {card.nombre}{card.ape}
      </h1>
      <p style={style.overlay}>
      {card.prof}
      </p>
      </div>
      ))}
        
      
      
      
  <div style={style.body}>
  <div style ={style.left}>
  {datos.map((card,i) => (
    <div style ={style.borderer2} key={i}>
  <h4  style ={style.subtitle2}>
        Datos Personales 
      </h4>
      {card.cin ? (
        <>
      <h5 style={style.intertitle}>
      CIN:
      </h5>
      <p style={style.interer}>
        {card.cin}
        </p>
        </>
        ):null}
 {card.nprof ? (
   <>
      <h5 style={style.intertitle}>
      Registro Profesional N°:
      </h5>
      <p style={style.interer}> {card.nprof}</p>
      </>
 ):null}
 {card.tel ? (
   <>
      <h5 style={style.intertitle}>
      Telefono:
      </h5>
      <p style={style.interer}> {card.tel}</p>
      </>
 ):null}
 {card.email ? (
   <>
      <h5 style={style.intertitle}>
      Correo:
      </h5>
      <p style={style.interer}> {card.email}</p>
      </>
 ):null}
 {card.naci ? (
   <>
      <h5 style={style.intertitle}>
      Nacionalidad:
      </h5>
      <p style={style.interer}> {card.naci}</p>
      </>
 ):null}
 {card.fena ? (
   <>
      <h5 style={style.intertitle}>
      Fecha de Nacimiento:
      </h5>
      <p style={style.interer}> {card.fena}</p>
      </>
      ):null}
       {card.dir ? (
   <>
      <h5 style={style.intertitle}>
      Dirección:
      </h5>
      <p style={style.interer}> {card.dir}</p>
      </>
      ):null}
      </div>
      
      ))}  

      {herra[0].herrami? (
        <div style ={style.borderer2}>
      <h4  style ={style.subtitle2}>
        Herramientas y Habilidades
      </h4>
      {herra.map((card,i) => (
        <div key={i}>  
       <h5 style={style.intertitle}>
      {card.herrami} :
      </h5>
      <p style={style.interer}>
      {card.nivel}
      </p>
      </div>
       ))} 
      </div>
      ) : null}

      {idi[0].idioma ? (
        <div style ={style.borderer2}>
      <h4  style ={style.subtitle2}>
        Idiomas
      </h4>
      {idi.map((card,i) => (
        <div key={i}>
      <h5 style={style.intertitle}>
      {card.idioma} :
      </h5>
      <p style={style.interer}>{card.nivel}</p> 
      
      </div>
       ))} 
      </div>
      ) : null}

      {refe[0].referencia ? (
        <div style ={style.borderer2}>
      <h4  style ={style.subtitle2}>
        Referencias
      </h4>
      {refe.map((card,i) => (
      <div key={i}>
      <h5 style={style.intertitle}>
      {card.referencia} 
      </h5>
      <p style={style.interer}>
      Telef.: {card.telef}
      </p>
      </div>
        ))} 
      </div>
      ) : null}     
  
  </div>
  
  <div style ={style.right}>
  {datos[0].perfil   ? (
    <>
  <h4  style ={style.subtitle}>
        Perfil
      </h4>
      <div style={style.borderer}>
      <p style={style.interer}>
      {datos[0].perfil}
      </p>
      </div>
      </>
      ) : null} 
      
      {expe[0].puesto  ? (
        <>
     <h4  style ={style.subtitle}>
        Experiencia Especifica
      </h4>
      <div style={style.borderer}>
      {expe.map((card,i) => (
        <div key={i}>
      <h5 style={style.intertitle}>
      {card.puesto}, {card.empre}
      </h5>
      <h6 style={style.intertitle2}>
      Desde {card.finicio} --  hasta {card.ffinal} <span style={style.lign}> <RoomIcon style={style.icon}/>{card.ubicacion}</span>
      </h6>
      <p style={style.interer}>
      {card.tareas}
      </p>
      </div>
      ))}
      </div>
      </>
      ) : null}

      {gene[0].puesto  ? (
        <>
      <h4  style ={style.subtitle}>
        Experiencia General
      </h4>
      <div style={style.borderer}>
      {gene.map((card,i) => (
        <div key={i}>
        <h5 style={style.intertitle}>
        {card.puesto}, {card.empre}
        </h5>
        <h6 style={style.intertitle2}>
        Desde {card.finicio} --  hasta {card.ffinal}  <span style={style.lign}><RoomIcon style={style.icon}/>{card.ubicacion}</span> 
        </h6>
        <p style={style.interer}>
        {card.tareas}
        </p>
        </div>
      ))}
      </div>
      </>
      ) : null}


      {educa[0].titu  ? (
        <>
        <h4  style ={style.subtitle}>
        Educación
      </h4>
      <div style={style.borderer}>
      {educa.map((card,i) => (
        <div key={i}>
      <h5 style={style.intertitle}>
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
      </div>
      </>
      ) : null}

       {cursos[0].titu  ? (
         <>
      <h4  style ={style.subtitle}>
        Cursos y Capacitaciones
      </h4>
      <div style={style.borderer}>
      {cursos.map((card,i) => (
        <div key={i}>
      <h5 style={style.intertitle}>
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
      </div>
      
      </>
) : null}

      </div>
  </div>
      </div>
      ); 
    
    
  }  
  
  export default Plantilla4;



  /*inter:{
    marginTop: -25,
    marginBottom: "0%",
  },*/