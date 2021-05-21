import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ListaTransparencia from "../../../Layout/Bar/listas/ListaTransparencia";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from '@material-ui/icons/Assignment';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { consumerFirebase } from "../../../../server";




const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8
  },
paper: {
      backgroundColor: "#f5f5f5",
      padding: "20px",
      minHeight: 650,
      marginTop:8
    },
    breadcrumbs:{
      backgroundColor: "#fafafa",
      marginTop:2,
      padding: "5px",
      color: "#fff"
    },
    icon:{
    marginRight: 0.5,
    width: 20,
    height: 20,
  },
    link: {
    display: "flex"
  },
     div:{
        marginBottom: 22,
        backgroundColor: "#0071bc",
        width : 80,
        height: 5,
      },

  gridTextfield: {
    marginTop: "20px",
    marginBottom: "-20px"
  },
  botones: {
    marginRight: "15px",
    marginLeft: "15px"
  
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    
  },
  
  cardContent: {
    flexGrow: 1,
    paddingTop: "2%",
    paddingBottom: "1%"
  },
  barraBoton: {
    marginTop: "20px"
  },
  
};

class Inventario extends Component {
  state = {
    inventarios: [],
   

  };

  

    
   
  async componentDidMount() {
    let objectQuery = this.props.firebase.db.collection("Inventarios");
    const snapshot = await objectQuery.get();
    const arrayInventarios = snapshot.docs.map(doc => {
        let data = doc.data();
        let id = doc.id;
        return {id, ...data};
    })
    this.setState({
        inventarios:arrayInventarios
    })
}


 


  render() {
    return (
      <Container style={style.cardGrid}>
        <ListaTransparencia/>
      <Paper style={style.breadcrumbs}>
                <Grid item xs={12} sm={12}>
            <Breadcrumbs aria-label="breadcrumbs">
            <Link color="textSecondary" style={style.link} href="/" >
                                    <HomeIcon style={style.icon} />
                                     Municipalidad de Buena Vista 
                                </Link>
                                <Link color="inherit" style={style.link} href="/intendente" >
                                    <AssignmentIcon style={style.icon} />
                                     Inventario
                                </Link>
              
            </Breadcrumbs>
          </Grid>
      </Paper>
        <Paper style={style.paper}>

                 <Typography  variant="h4"  color="textSecondary">
          INVENTARIO - TESAKÃ
        </Typography>
        <div style={style.div} ></div>

          <Grid item xs={12} sm={12} style={style.gridTextfield}>
            <Grid container spacing={2}>
              {this.state.inventarios.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={8}>
                  <Card style={style.card}>
                    <CardContent style={style.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {card.nombre + " - " + card.mes + " - " + card.ano + "    "}
                      <Button style={style.botones} to="chart" target="_blank" size="small" variant="contained" color="primary" href={(card.fotos)}  startIcon={<PictureAsPdfIcon/>} >
                        Ver documento
                      </Button>
                     
                      
                      </Typography>
                      </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default consumerFirebase(Inventario);
