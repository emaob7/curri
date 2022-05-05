import React, { Component } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Fab,
  Button,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { consumerFirebase } from "../../server";
import { Link } from "react-router-dom";
import Content from "../Children/Content";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DeleteIcon from '@material-ui/icons/Delete';




const style = {
  paper:{
    overflowX: "hidden",
    overflowY: "hidden",
  },
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8,
  },

  botones: {
    marginTop: 22,
    marginBottom: 35,
    marginRight: 17,
  },
  avatar: {
    width : 50,
      height: 50
  },
  card: {
    height: "100%",
   // width : 280,
    display: "flex",
    flexDirection: "column",
  },


  cardContent: {
    flexGrow: 1,
    paddingTop: "4px",
    paddingBottom: "1%",
  },
 
};

class CurriculumList extends Component {
  state = {
    datosps: [],
  };

  async componentDidMount() {
    let objectQuery = this.props.firebase.db.collection("Datosps");
    const snapshot = await objectQuery.get();
    const arrayDatops = snapshot.docs.map((doc) => {
      let data = doc.data();
      let id = doc.id;
      return { id, ...data };
    });
    this.setState({
      datosps: arrayDatops,
    });
  }

  eliminarDatosps = (id) => {
    this.props.firebase.db
    .collection("Datosps")
    .doc(id)
    .delete()
    .then((success) => {
      this.eliminarDatospsDeListaEstado(id);
    });

   
  };

  eliminarDatospsDeListaEstado = (id) => {
    const datospsListaNueva = this.state.datosps.filter(
      (datosps) => datosps.id !== id
    );
    this.setState({
      datosps: datospsListaNueva,
    });
  };
  editarCurriculum = (id) => {
    this.props.history.push("/curriculum/edit/" + id);
  }
  descargarCurriculum = (id) => {
    this.props.history.push("/descargar/" + id);
  }




  render() {
    return (
      <Content>
      <Grid container spacing={2}>
      <Grid item  xs={12} sm={12} md={12}>
        
          <Typography variant="h4" color="textSecondary">
            Curriculums
          </Typography>
          

          <Fab
            style={style.botones}
            variant="extended"
            size="medium"
            color="primary"
            component={Link}
            button
            to="/nuevo/datos/"
          >
            <AddIcon/>
            Nuevo
          </Fab>

          <Grid container spacing={2}>
            {this.state.datosps.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3} >
                <Card style={style.card}>
                <CardHeader
                  avatar={
                  <Avatar
                  style={style.avatar}
                        src={card.foto}
                  />
                          }
        action={
          <IconButton 
          aria-label="delete"
          onClick={() => this.eliminarDatosps(card.id)}>
            <HighlightOffIcon color="secondary" />
          </IconButton>
        }
        title= {card.datos[0].nombre + " " + card.datos[0].ape}
        /*subheader={card.datos[0].perfil}*/
      />
                  <CardContent style={style.cardContent}>
                    <Typography gutterBottom variant="caption" >
                    {card.datos[0].perfil}
                    </Typography>
 </CardContent>

                  <CardActions>
                    <Button
                      startIcon={<EditIcon/>}
                      color="primary"
                      onClick={() => this.editarCurriculum(card.id)}
                    >
                      
                      Editar
                    </Button>
                  

                  </CardActions>
                </Card>
              </Grid>
            ))}
            </Grid>
        </Grid>
        </Grid>
      </Content>
    );
  }
}

export default consumerFirebase(CurriculumList);