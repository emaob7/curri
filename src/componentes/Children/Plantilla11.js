import React from "react";
import { Divider } from "@material-ui/core";
import "../../App.css";
import { Typography } from "@material-ui/core";



const style = {
  div: {
    marginBottom: 22,
    marginRight: 17,
    paddingLeft: "7%",
    paddingTop: "7%",
    background: "#f5f5f5",
  },

  inter:{
    marginBottom: "0%",
  },
  
  left: {
    width: "200px",
  },

  right:{
    width: "450px",
    padding: "25px",

  },
  divider:{
    marginTop: "2%",
    marginBottom: "2%",
  },
  parrafo:{
    marginLeft:"5%",
    marginBottom: "2%",
    color: "#757575"
  },
  parrafo2:{
    color: "#757575"
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

  export default function Plantilla1 (props){
    return(
      <div style ={style.div}>
      <Typography style ={style.inter} variant="h4" gutterBottom>
        Emmanuel 
      </Typography>
      <Typography style ={style.inter} variant="h4" gutterBottom>
        Ortigoza Bordón
      </Typography>
      <Typography variant="overline" gutterBottom>
        Desarrollador de Software
      </Typography>
      <Divider style ={style.divider}/>
<div className="cuerpo">

<div style ={style.left}>
<Typography variant="h6" gutterBottom>
        Datos Personales 
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Telefono: 0981745130
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Correo: emanuelob7@gmail.com
      </Typography>
      <Typography variant="h6" gutterBottom>
        Datos Personales
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Telefono: 0981745130
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Correo: emanuelob7@gmail.com
      </Typography>
      <Typography variant="h6" gutterBottom>
        Datos Personales
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Telefono: 0981745130
      </Typography>
      <Typography style ={style.parrafo2} variant="body2" gutterBottom>
      Correo: emanuelob7@gmail.com
      </Typography>
      
       

</div>
<Divider orientation="vertical" flexItem />

<div style ={style.right}>

<Typography style={style.titulo} variant="h6" gutterBottom>
        Perfil
      </Typography> 
      <Typography  variant="body2" gutterBottom>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </Typography>
      <Divider style ={style.divider}/>
      
      
      <Typography  variant="h6" gutterBottom>
        Experiencia Especifica
      </Typography>
      
      <Typography variant="button" gutterBottom>
      Director de Tránsito, Municipalidad de Buena Vista
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde Enero 2010, hasta Mayo 2019, ciudad Buena Vista
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      -Realizaba Habilitaciones y registros de Conducir
      -Control de Documentos
      </Typography>

      <Typography variant="button" gutterBottom>
      Director de Tránsito, Municipalidad de Buena Vista
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde Enero 2010, hasta Mayo 2019, ciudad Buena Vista
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      -Realizaba Habilitaciones y registros de Conducir
      -Control de Documentos
      </Typography>
      
      <Typography variant="button" gutterBottom>
      Director de Tránsito, Municipalidad de Buena Vista
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde Enero 2010, hasta Mayo 2019, ciudad Buena Vista
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      -Realizaba Habilitaciones y registros de Conducir
      -Control de Documentos
      </Typography>

      <Typography variant="button" gutterBottom>
      Director de Tránsito, Municipalidad de Buena Vista
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde Enero 2010, hasta Mayo 2019, ciudad Buena Vista
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      -Realizaba Habilitaciones y registros de Conducir
      -Control de Documentos
      </Typography>


      <Divider style ={style.divider}/>
      
      <Typography variant="h6" gutterBottom>
        Experiencia General
      </Typography>
      <Typography variant="button" gutterBottom>
      Director de Tránsito, Municipalidad de Buena Vista
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde Enero 2010, hasta Mayo 2019, ciudad Buena Vista
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      -Realizaba Habilitaciones y registros de Conducir
      -Control de Documentos
      </Typography>
      
      <Typography variant="button" gutterBottom>
      Director de Tránsito, Municipalidad de Buena Vista
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      Desde Enero 2010, hasta Mayo 2019, ciudad Buena Vista
      </Typography>
      <Typography style ={style.parrafo} variant="body2" gutterBottom>
      -Realizaba Habilitaciones y registros de Conducir
      -Control de Documentos
      </Typography>
      <Divider style ={style.divider}/>
      <Typography variant="h6" gutterBottom>
        Educación
      </Typography>
      <Typography variant="button" gutterBottom>
      Ingenieria de Sistemas Informaticos
      </Typography>
      <Typography style ={style.fecha} variant="body2" gutterBottom>
      concluida Febrero 2019
      </Typography>
      <Typography style ={style.ciudad} variant="body2" gutterBottom>
      , ciudad Villarrica
      </Typography>
      </div>
</div>
</div>
    ); 
    
    
      
  }
