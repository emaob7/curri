import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Fab,
  Button,
  Tooltip
} from "@material-ui/core";
import { consumerFirebase } from "../../server";
import { Link } from "react-router-dom";
import Papel from "../Children/Papel";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';




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
    height: "100%",
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
      <>
      <Grid container spacing={2}>
      <Grid item  xs={12} sm={12} md={12}>
        <Papel>
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
              <Grid item key={card.id} xs={12} sm={12} md={4} >
                <Card style={style.card}>
                  <CardContent style={style.cardContent}>
                    <Typography gutterBottom variant="h6" >
                      {card.nom + " " + card.ape}
                    </Typography>
 </CardContent>

                  <CardActions>
                    <Button
                      startIcon={<GetAppIcon/>}
                      color="primary"
                      onClick={() => this.descargarCurriculum(card.id)}
                    >
                      
                      Descargar
                    </Button>
                    <Tooltip title="Vista Previa" placement="top">
                    <IconButton
                    aria-label="preview"
                      size="small"
                     
                    >
                      <VisibilityIcon/>
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar" placement="top">
                  <IconButton
                  aria-label="edit"
                      size="small"
                      onClick={() => this.editarCurriculum(card.id)}
                    > 
                    <EditIcon />
                    
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar" placement="top">
                    <IconButton
                    aria-label="delete"
                      size="small"
                      onClick={() => this.eliminarDatosps(card.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    </Tooltip>

                  </CardActions>
                </Card>
              </Grid>
            ))}
            </Grid>
          
        </Papel>
        </Grid>
        </Grid>
      </>
    );
  }
}

export default consumerFirebase(CurriculumList);
