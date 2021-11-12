import React from "react";
import { Divider } from "@material-ui/core";
import "../../../App.css";
import { Typography } from "@material-ui/core";


const style = {
  div: {
    marginBottom: 22,
    marginRight: 17,
    paddingLeft: "7%",
    paddingTop: "7%",
  },

  inter:{
    marginBottom: "0%",
  },
  
  left: {
    width: "200px",
    paddingTop: "5px",
    
  },

  right:{
    width: "450px",
    padding: "10px",
    paddingTop: "32px",
  },
  divider:{
    paddingLeft: "2%",
    paddingRight: "2%",
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




class Plantilla2 extends React.Component {
 constructor(props){
    super(props);
  }

  render() {
   const {datos,herra,idi,expe,gene,refe,cursos,educa, color} = this.props;
   //console.log(datos[0].perfil)
    return(
      <div style ={style.div}>
      {datos.map((card) => (
        <>
        <Typography style ={style.inter} variant="h4" gutterBottom>
        {card.nombre} 
      </Typography>
      <Typography style ={style.inter} variant="h4" gutterBottom>
      {card.ape}
      </Typography>
      <Typography variant="overline" gutterBottom>
      {card.prof}
      </Typography>
      </>
      ))}
        
      
      
      <Divider style ={style.divider}/>
  <div className="cuerpo">
  <div style ={style.left}>
  {datos.map((card) => (
    <>
  <Typography variant="h6" gutterBottom>
        Datos Personales 
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      CIN: {card.cin}
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
      </>
      ))}  

      {herra[0].herrami? (
        <>
      <Typography variant="h6" gutterBottom>
        Herramientas y Habilidades
      </Typography>
      {herra.map((card) => (  
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {card.herrami} : {card.nivel}
      </Typography>
       ))} 
      </>
      ) : null}

      {idi[0].idioma ? (
        <>
      <Typography variant="h6" gutterBottom>
        Idiomas
      </Typography>
      {idi.map((card) => (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {card.idioma} : {card.nivel}
      </Typography>
       ))} 
      </>
      ) : null}

      {refe[0].referencia ? (
        <>
      <Typography variant="h6" gutterBottom>
        Referencias
      </Typography>
      {refe.map((card) => (
      <>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      {card.referencia} 
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      Telef.: {card.telef}
      </Typography>
      </>
        ))} 
      </>
      ) : null}     
  
  </div>
  <Divider orientation="vertical" flexItem />
  
  <div style ={style.right}>
  {datos[0].perfil   ? (
    <>
  <Typography style={style.titulo({color:color})} variant="h6" gutterBottom>
        Perfil
      </Typography> 
      <Typography  variant="body2" gutterBottom>
      {datos[0].perfil}
      </Typography>
      <Divider style ={style.divider}/>
      </>
      ) : null} 
      
      {expe[0].puesto  ? (
        <>
      <Typography  variant="h6" gutterBottom>
        Experiencia Especifica
      </Typography>
      {expe.map((card) => (
        <>
      <Typography variant="button" gutterBottom>
      {card.puesto}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {card.finicio},  hasta {card.ffinal},   {card.ubicacion}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {card.tareas}
      </Typography>
      </>
      ))}
           
      <Divider style ={style.divider}/>
      </>
      ) : null}

      {gene[0].puesto  ? (
        <>
      <Typography variant="h6" gutterBottom>
        Experiencia General
      </Typography>
      {gene.map((card) => (
        <>
        <Typography variant="button" gutterBottom>
        {card.puesto}
        </Typography>
        <Typography style ={style.fecha} variant="body2" gutterBottom>
        Desde {card.finicio},  hasta {card.ffinal},   {card.ubicacion}
        </Typography>
        <Typography style ={style.parrafo} variant="body2" gutterBottom>
        {card.tareas}
        </Typography>
        </>
      ))}
      <Divider style ={style.divider}/>
      </>
      ) : null}


      {educa[0].titu  ? (
        <>
      <Typography variant="h6" gutterBottom>
        Educación
      </Typography>

      {educa.map((card) => (
        <>
      <Typography variant="button" gutterBottom>
      {card.titu}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {card.insti}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {card.duracion}, concluido en {card.culminacion}
      </Typography>
      </>
      ))}
      <Divider style ={style.divider}/>
      </>
      ) : null}

       {cursos[0].titu  ? (
         <>
      <Typography variant="h6" gutterBottom>
        Cursos y Capacitaciones
      </Typography>

      {cursos.map((card) => (
        <>
      <Typography variant="button" gutterBottom>
      {card.titu}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {card.insti}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {card.duracion}, concluido en {card.culminacion}
      </Typography>
      </>
      ))}
      
      </>
) : null}

      </div>
  </div>
  </div>
      ); 
    
    
  }  
  } 
  export default Plantilla2;
