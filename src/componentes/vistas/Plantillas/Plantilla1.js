import React from "react";
import "../../../App.css";
import AvatarCv from "../../Children/AvatarCv";


const style = {
  div: {
    minWidth: "816px",
    minHeight: "1300px",
    marginBottom: 22,
    marginRight: 15,
    paddingLeft: 1,
    paddingTop: 1,
  },
  avatar:{
    marginLeft: 20,
    marginBottom:20,
    marginTop: 20,

  },
  body:{
    display: "flex",
    flexDirection: "row"
  },
  borderer:{
    borderBottom: "2px solid rgb(212, 212, 212)",
    paddingBottom:7,
    marginBottom:7
  },

  super:{
    marginBottom: 10,
    paddingLeft: 0,
    paddingBottom:10
  },
  overlay:{
    marginTop: -20,
    marginBottom: "0%",
    textTransform: "uppercase",
    letterSpacing: "1pt",
    
  },
  perfil:{
    marginTop: 2,
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: "2pt",
   // textAlign:"center",
    fontSize: "12px",
    //textDecoration:"blink",
    //color: "#263238",
  //  backgroundColor:"#eeeeee",
    //float:"center",
   paddingBottom:3,
   paddingTop:5,
   //borderTop: "2px solid rgb(212, 212, 212)",
  //borderBottom: "2px solid rgb(212, 212, 212)",

   //borderBottomStyle:"double"
  },
  
  left: {
    width: "250px",
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
//borderTop: "2px solid rgb(212, 212, 212)",
    backgroundColor: "#fafafa",
    minHeight: "1200px",
    
  },

  right:{
    width: "600px",
    paddingLeft: "15px",
    paddingTop: 0,
  //  borderTop: "2px solid rgb(212, 212, 212)"
  },
 
  interer:{
    marginTop: 2,
    marginBottom: "0%",
  },
  intertitle:{
    marginTop: 5,
    marginBottom: 0,
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "1pt",
  },
  lign:{
float:"right"
  },
 
  subtitle:{
    marginTop: 10,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: "1pt",
    fontWeight: "bolder",
  }
}




const Plantilla1 = (props) => {
   const {datos,herra,idi,expe,gene,refe,cursos,educa,color,fotog,pref} = props;
   
    return(
      <div style ={style.div} className="plantilla1">
  
  <div style ={style.body}>
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
      {datos[0].perfil   ? (
    <div style={style.borderer}>
  <h4  style ={style.perfil}>
        Perfil
      </h4> 
      <p style={style.interer}>
      {datos[0].perfil}
      </p>
      </div>
      ) : null}
      </div>
      ))}
  </div>
  
        
      
      
      
  <div style={style.body}>
  <div style ={style.left}>
  {datos.map((card,i) => (
    <div style ={style.borderer} key={i}>
  <h4  style ={style.subtitle}>
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
        <div style ={style.borderer}>
      <h4  style ={style.subtitle}>
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
        <div style ={style.borderer}>
      <h4  style ={style.subtitle}>
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
        <div style ={style.borderer}>
      <h4  style ={style.subtitle}>
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
   
      
      {expe[0].puesto  ? (
        <div style={style.borderer}>
     <h4  style ={style.subtitle}>
        Experiencia Especifica
      </h4>
      {expe.map((card,i) => (
        <div key={i}>
      <h5 style={style.intertitle}>
      {card.puesto}, {card.empre}
      </h5>
      <h6 style={style.intertitle}>
      Desde {card.finicio} --  hasta {card.ffinal} <span style={style.lign}>{card.ubicacion}</span>
      </h6>
      <p style={style.interer}>
      {card.tareas}
      </p>
      </div>
      ))}
      </div>
      ) : null}

      {gene[0].puesto  ? (
        <div style={style.borderer}>
      <h4  style ={style.subtitle}>
        Experiencia General
      </h4>
      {gene.map((card,i) => (
        <div key={i}>
        <h5 style={style.intertitle}>
        {card.puesto}, {card.empre}
        </h5>
        <h6 style={style.intertitle}>
        Desde {card.finicio} --  hasta {card.ffinal}  <span style={style.lign}>{card.ubicacion}</span> 
        </h6>
        <p style={style.interer}>
        {card.tareas}
        </p>
        </div>
      ))}
      </div>
      ) : null}


      {educa[0].titu  ? (
        <div style={style.borderer}>
        <h4  style ={style.subtitle}>
        Educación
      </h4>

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
      ) : null}

       {cursos[0].titu  ? (
         <>
      <h4  style ={style.subtitle}>
        Cursos y Capacitaciones
      </h4>

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
      
      </>
) : null}

      </div>
  </div>
      </div>
      ); 
    
    
  }  
  
  export default Plantilla1;



  /*inter:{
    marginTop: -25,
    marginBottom: "0%",
  },*/