import React, { Component } from "react";
import {
  Grid,
  ButtonBase,
  Card,
  CardContent,
  CardActions,
  Fab,
  Button,
  Tooltip,
  CardMedia,
  CardActionArea,
  Typography
} from "@material-ui/core";
import { consumerFirebase } from "../../server";
import { Link } from "react-router-dom";
import Content from "../Children/Content";
import auth from "../../componentes/Imagenes/Botones/auth.png";
import cloudmessaging from "../../componentes/Imagenes/Botones/cloudmessaging.png";
import experiments from "../../componentes/Imagenes/Botones/experiments.png";





const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8,
  },

  botones: {
    marginTop: 22,
    marginBottom: 35,
    marginRight: 17,
  },



  card: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
  },


  cardContent: {
    flexGrow: 1,
    paddingTop: "4px",
    paddingBottom: "1%",
  },
 
};

export default function Home(){

  
    return (
      <>
        <Content>
        <Grid container spacing={2}>
        <Grid item  xs={12} sm={12} md={6}>
            <Card>
            <CardActionArea
            component={Link}
            to="/nuevo/datos"
            >
            <CardMedia
            component="img"
            style={style.card}
            image={cloudmessaging}
            title="Agregar Nuevo"
            />
         <CardContent>
         <Typography variant="h6" gutterBottom>
        Agregar
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      Agregue un nuevo curriculums a su lista, no olvides agregar solo contenidos de valor.
      </Typography>
             
         
         </CardContent>
        </CardActionArea>
            </Card>
            </Grid>
        <Grid item  xs={12} sm={12} md={6}>
            <Card>
            <CardActionArea
            component={Link}
            to="/list"
            >
            <CardMedia
            component="img"
            style={style.card}
            image={auth}
            title="Lista de curriculums"
            />
         <CardContent>
         <Typography variant="h6" gutterBottom>
        Tu lista
      </Typography>
             <Typography variant="subtitle1" gutterBottom>
             Los Curriculums que ya escribiste, aqui podras editarlos y descargarlos.
             </Typography>
         
         </CardContent>
        </CardActionArea>
            </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={12}>
            <Card>
            <CardActionArea
            component={Link}
            to="/list"
            >
            <CardMedia
            component="img"
            style={style.card}
            image={experiments}
            title="Muy pronto, mas novedades"
            />
         <CardContent>
         <Typography variant="h6" gutterBottom>
        Sugerencias
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      Avisanos si falta agregar, modificar alguna cosa, o tambien si se te ocurre alguna idea, lo tendremos en cuenta.
      </Typography>
             
         
         </CardContent>
        </CardActionArea>
            </Card>
            </Grid>


           
            </Grid>
        
        </Content>
        
        
      </>
    );
  }
