import React from "react";
import "../../../App.css";
import RoomIcon from '@material-ui/icons/Room';
import AvatarCv from "../../Children/AvatarCv";


const style = {
  div: {
    minWidth: "816px",
    minHeight: "1300px",
    marginBottom: 22,
    marginRight: 0,
    paddingLeft: 0,
    paddingTop: 10,
  },
  body:{
    display: "flex",
    flexDirection: "row"
  },
  avatar:{
    marginLeft: 20,
    marginBottom:20,
    marginTop: 20,
  },
  left: {
    width: "250px",
    marginTop: -20,
    paddingLeft: 20,
    paddingRight: 8,
    minHeight: "1200px",
  },
  right:{
    width: "600px",
    paddingLeft: "20px",
    marginRight: 20,
    marginTop: -20,
  },
  borderer:{
    marginBottom:7,
  },
  borderer2:{
    //  borderBottom: "2px solid rgb(212, 212, 212)",
      marginBottom:7,
      paddingBottom:7,
     // paddingLeft:5,
    },
  lign:{
float:"right",
marginTop: -5,
  },
   super:{
    //marginTop: 10,
    marginTop: 8,
    paddingBottom:10,
    letterSpacing: "1pt",
    textTransform: "uppercase",
    fontSize: "10px",
  },
  perfil:{
    marginTop: 2,
    marginBottom: "0%",
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
    marginTop: 22,
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: "1pt",
    textAlign:"center",
    //textDecoration:"blink",
    //color: "#263238",
    //backgroundColor:"#eeeeee",
    float:"center",
   //paddingBottom:5,
  // borderBottom: "2px solid rgb(212, 212, 212)",
   borderBottomStyle:"double"
  },
  subtitle2:{
    marginTop: 22,
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: "1pt",
    
   //borderBottom: "2px solid rgb(212, 212, 212)",
   borderBottomStyle:"double",
    //textAlign:"center",
    //textDecoration:"blink",
    //color: "#263238",
   // backgroundColor:"#eeeeee",
    float:"center",
    //paddingBottom:10,
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
   fontSize: "13px",
    letterSpacing: "1pt",
  },
  interer:{
    marginTop: 2,
    marginBottom: "0%",
    fontSize: "15px",
  },

  
  icon:{
    width:14,
    marginBottom:-8,
    marginRight:2,
    color: "gray",
  }
}




const Plantilla5 = (props) => {
   const {datos,herra,idi,expe,gene,refe,cursos,educa,color, fotog,pref} = props;
   
    return(
      <div style ={style.div} className="plantilla3">
        
        <div style ={style.body}>
      <div  style={style.avatar}>
        
      <AvatarCv
      fotog={fotog} 
      pref={pref}
      />   
  </div>
        
      {datos.map((card, i) => (
        
        <div style ={style.super} key={i}>
        <h2 style ={style.nombre} >{card.nombre}{" "}{card.ape}</h2>
      <h5 style={style.overlay}>
      {card.prof}
      </h5>
      {datos[0].perfil   ? (
    <>
      <div style={style.borderer}>
      <p style={style.perfil}>
      {datos[0].perfil}
      </p>
      </div>
      </>
      ) : null} 
      </div>
      ))}
  
  </div>
        
      
      
      
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
      Registro Profesional N??:
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
      Direcci??n:
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
        Educaci??n
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
      Duraci??n {card.duracion}, concluido en {card.culminacion}
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
      Duraci??n {card.duracion}, concluido en {card.culminacion}
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
  
  export default Plantilla5;



  /*inter:{
    marginTop: -25,
    marginBottom: "0%",
  },*/