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
titulo:{
  display: "flex",
  marginTop: "-6%"
},


}




class Plantilla1 extends React.Component {
 constructor(props){
    super(props);
  }

  render() {
   const {datos} = this.props;
   console.log(this.props)
    return(
      <div style ={style.div}>
      <Typography style ={style.inter} variant="h4" gutterBottom>
        {datos.nom} 
      </Typography>
      <Typography style ={style.inter} variant="h4" gutterBottom>
      {datos.ape}
      </Typography>
      <Typography variant="overline" gutterBottom>
      {datos.prof}
      </Typography>
      <Divider style ={style.divider}/>
  <div className="cuerpo">
  
  <div style ={style.left}>
  <Typography variant="h6" gutterBottom>
        Datos Personales 
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      CIN: {datos.cin}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Telefono: {datos.tel}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Correo: {datos.email}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Nacionalidad: {datos.naci}
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Fecha de Nacimiento: {datos.fena}
      </Typography>

      {datos.her || datos.her2 || datos.her3 || datos.her4 || datos.her5  ? (
        <>
      <Typography variant="h6" gutterBottom>
        Herramientas y Habilidades
      </Typography>
      {datos.her ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.her} : {datos.niv}
      </Typography>
       ) : null}
       {datos.her2 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.her2} : {datos.niv2}
      </Typography>
      ) : null}
      {datos.her3 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.her3} : {datos.niv3}
      </Typography>
      ) : null}
      {datos.her4 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.her4} : {datos.niv4}
      </Typography>
      ) : null}
      {datos.her5 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.her5} : {datos.niv5}
      </Typography>
      ) : null}
      </>
      ) : null}
      {datos.idi || datos.idi2 || datos.idi3 || datos.idi4 || datos.idi5 ? (
        <>
      <Typography variant="h6" gutterBottom>
        Idiomas
      </Typography>
      {datos.idi ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.idi} : {datos.nive}
      </Typography>
      ) : null}
      {datos.idi2 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.idi2} : {datos.nive2}
      </Typography>
      ) : null}
      {datos.idi3 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.idi3} : {datos.nive3}
      </Typography>
      ) : null}
       {datos.idi4 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.idi4} : {datos.nive4}
      </Typography>
      ) : null}
      {datos.idi5 ? (
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      {datos.idi5} : {datos.nive5}
      </Typography>
      ) : null}
      </>
      ) : null}

      {datos.ref1 || datos.ref2  ? (
        <>
      <Typography variant="h6" gutterBottom>
        Referencias
      </Typography>
      
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      {datos.ref1} 
      </Typography>
      {datos.ref1  ? (
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      Telef.: {datos.tel1}
      </Typography>
      ) : null}
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      {datos.ref2}
      </Typography>
      {datos.ref2  ? (
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      Telef.: {datos.tel1}
      </Typography>
      ) : null}
      </>
      ) : null}     
  
  </div>
  <Divider orientation="vertical" flexItem />
  
  <div style ={style.right}>
  {datos.obje   ? (
    <>
  <Typography style={style.titulo} variant="h6" gutterBottom>
        Perfil
      </Typography> 
      <Typography  variant="body2" gutterBottom>
      {datos.obje}
      </Typography>
      <Divider style ={style.divider}/>
      </>
      ) : null} 
      
      {datos.puesto || datos.puesto2|| datos.puesto3|| datos.puesto4  ? (
        <>
      <Typography  variant="h6" gutterBottom>
        Experiencia Especifica
      </Typography>
      {datos.puesto   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.puesto}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {datos.finicio}, hasta {datos.ffinal}, {datos.ubicacion}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {datos.tareas}
      </Typography>
      </>
      ) : null}
      {datos.puesto2   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.puesto2}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {datos.finicio2}, hasta {datos.ffinal2}, {datos.ubicacion2}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {datos.tareas2}
      </Typography>
      </>
      ) : null}
      {datos.puesto3   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.puesto3}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {datos.finicio3}, hasta {datos.ffinal3}, {datos.ubicacion3}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {datos.tareas3}
      </Typography>
      </>
      ) : null}
      {datos.puesto4   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.puesto4}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {datos.finicio4}, hasta {datos.ffinal4}, {datos.ubicacion4}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {datos.tareas4}
      </Typography>
      </>
      ) : null}
      <Divider style ={style.divider}/>
      </>
      ) : null}
      {datos.puestog || datos.puestg2|| datos.puestg3|| datos.puestg4  ? (
        <>
      <Typography variant="h6" gutterBottom>
        Experiencia General
      </Typography>
      {datos.puestog   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.puestog}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {datos.finiciog}, hasta {datos.ffinalg}, {datos.ubicaciong}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {datos.tareasg}
      </Typography>
      </>
      ) : null}
      {datos.puestg2   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.puestg2}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {datos.finicig2}, hasta {datos.ffinag2}, {datos.ubicaciog2}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {datos.tareag2}
      </Typography>
      </>
      ) : null}
      {datos.puestg3   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.puestg3}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde {datos.finicig3}, hasta {datos.ffinag3}, {datos.ubicaciog3}
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      {datos.tareag3}
      </Typography>
      </>
      ) : null}
      <Divider style ={style.divider}/>
      </>
      ) : null}
      {datos.tite || datos.tite2|| datos.tite3|| datos.tite4  ? (
        <>
      <Typography variant="h6" gutterBottom>
        Educación
      </Typography>
      {datos.tite   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tite}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.inse}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Desde {datos.dese}, concluido en {datos.cule}
      </Typography>
      </>
      ) : null}
      {datos.tite2   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tite2}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.inse2}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Desde {datos.dese2}, concluido en {datos.cule2}
      </Typography>
      </>
      ) : null}
    {datos.tite3   ? (
      <>
      <Typography variant="button" gutterBottom>
      {datos.tite3}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.inse3}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Desde {datos.dese3}, concluido en {datos.cule3}
      </Typography>
      </>
      ) : null}
      {datos.tite4   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tite4}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.inse4}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Desde {datos.dese4}, concluido en {datos.cule4}
      </Typography>
      </>
      ) : null}
      <Divider style ={style.divider}/>
      </>
      ) : null}

       {datos.tit || datos.tit2|| datos.tit3|| datos.tit4  ? (
         <>
      <Typography variant="h6" gutterBottom>
        Cursos y Capacitaciones
      </Typography>
      {datos.tit   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur}, concluido en {datos.cul}
      </Typography>
      </>
      ) : null}
      {datos.tit2   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit2}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins2}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur2}, concluido en {datos.cul2}
      </Typography>
      </>
       ) : null}
      {datos.tit3   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit3}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins3}
      </Typography>) 
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur3}, concluido en {datos.cul3}
      </Typography>
      </>
      ) : null}
      {datos.tit4   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit4}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins4}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur4}, concluido en {datos.cul4}
      </Typography>
      </>
      ) : null}
      {datos.tit5   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit5}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins5}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur5}, concluido en {datos.cul5}
      </Typography>
      </>
      ) : null}
      {datos.tit6   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit6}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins6}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur6}, concluido en {datos.cul6}
      </Typography>
      </>
      ) : null}
      {datos.tit7   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit7}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins7}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur7}, concluido en {datos.cul7}
      </Typography>
      </>
      ) : null}
      {datos.tit8   ? (
        <>
      <Typography variant="button" gutterBottom>
      {datos.tit8}
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      {datos.ins8}
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      Duración {datos.dur8}, concluido en {datos.cul8}
      </Typography>
      </>
      ) : null}
      </>
) : null}

      </div>
  </div>
  </div>
      ); 
    
    
  }  
  } 
  export default Plantilla1;
