import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  Container,
  Paper,
  Grid,
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  ButtonGroup,
  Tooltip
} from "@material-ui/core";
import { consumerFirebase } from "../../../server";
import logo from "../../../logo.svg";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { obtenerData, obtenerDataAnterior } from "../../../sesion/actions/InmuebleAction";
import CustomSlider from "../CustomSlider";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Contacto from "./Contacto";





const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8
  },
  input: {
    marginLeft: 1,
    flex: 1,
    paddingLeft: 13,
  },
  iconButton: {
    padding: 10,
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 335,
    
  },
paper: {
      backgroundColor: "#f5f5f5",
      padding: "20px",
      minHeight: 650,
      marginTop:8
    },
    paper2: {
      backgroundColor: "#fff",
      padding: "20px",
      minHeight: 500,
      marginTop:8
    },
    breadcrumbs:{
      backgroundColor: "#152549",
      marginTop:2,
      marginBottom:10,
      padding: "5px",
      
    },

    icon:{
    marginRight: 0.5,
    width: 20,
    height: 20,
  },
    link: {
    display: "flex",
    color: "#fff"
  },
     

  gridTextfield: {
    marginTop: "20px",
    marginBottom: "-20px"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  barraBoton: {
    margin: "18px",
    paddingTop: "5%"
  
  },
  chips: {
    margin: "3px",
    padding: "3%",
    marginBottom: "10px",
    marginTop: "26px"
  
  },
  foto: {
    width: "100%",
    height: "100%",
    marginTop: "56px",
    marginLeft: "16px",
  },
  div:{
    marginTop:50
  }
  
};

class Principal extends Component {
  state = {
    inmuebles: [],
    textoBusqueda: "",
    paginas: [],
    paginaSize: 10,
    casaInicial: null,
    paginaActual: 0
  };

  cambiarBusquedaTexto = e => {
    const self = this;
    self.setState({
      [e.target.name]: e.target.value
    });

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      name: e.target.value,
      typing: false,
      typingTimeout: setTimeout(goTime => {
          const firebase = this.props.firebase;
          const {paginaSize} = this.state;

          obtenerDataAnterior(firebase, paginaSize, 0, self.state.textoBusqueda).then(firebaseReturnData => {
            const pagina = {
              inicialValor : firebaseReturnData.inicialValor,
              finalValor : firebaseReturnData.finalValor
            }
            const paginas = [];
            paginas.push(pagina);

            this.setState({
              paginaActual : 0,
              paginas,
              inmuebles : firebaseReturnData.arrayInmuebles
            })

          })
        
      
      
      }, 500)
    });
  };

  anteriorPagina = () => {
    const {paginaActual, paginaSize, textoBusqueda, paginas} = this.state;
   
    if(paginaActual > 0) {
      const firebase = this.props.firebase;
       obtenerDataAnterior(firebase, paginaSize, paginas[paginaActual - 1].inicialValor, textoBusqueda).then(firebaseReturnData => {
        const pagina = {
          inicialValor : firebaseReturnData.inicialValor,
          finalValor : firebaseReturnData.finalValor
        }

        paginas.push(pagina);
      
        this.setState({
          paginas, 
          paginaActual : paginaActual - 1,
          inmuebles : firebaseReturnData.arrayInmuebles
        })

      })
    }


  }

  siguientePagina = () => {
    const {paginaActual,paginaSize, textoBusqueda, paginas, casaInicial } = this.state;
    const firebase = this.props.firebase;

    obtenerData(firebase, paginaSize,paginas[paginaActual].finalValor, textoBusqueda).then( firebaseReturnData => {

      if(firebaseReturnData.arrayInmuebles.length > 0){
        const pagina = {
          inicialValor :  firebaseReturnData.inicialValor,
          finalValor : firebaseReturnData.finalValor
        }

        paginas.push(pagina);
        this.setState({
          paginas,
          paginaActual : paginaActual + 1,
          inmuebles : firebaseReturnData.arrayInmuebles
        })
      }
    })
  }


  async componentDidMount() {

      const {paginaSize, textoBusqueda, casaInicial, paginas} = this.state;

      const firebase = this.props.firebase;

      const firebaseReturnData =  await obtenerDataAnterior(firebase, paginaSize, casaInicial, textoBusqueda);

      const pagina = {
        inicialValor : firebaseReturnData.inicialValor,
        finalValor : firebaseReturnData.finalValor
      }

      paginas.push(pagina);

      console.log(firebaseReturnData);

      this.setState({
        inmuebles : firebaseReturnData.arrayInmuebles,
        paginas,
        paginaActual : 0
      })

    
  }

  eliminarInmueble = id => {
    this.props.firebase.db
      .collection("Inmuebles")
      .doc(id)
      .delete()
      .then(success => {
        this.eliminarInmubleDeListaEstado(id);
      });
  };

  eliminarInmubleDeListaEstado = id => {
    const inmuebleListaNueva = this.state.inmuebles.filter(
      inmueble => inmueble.id !== id
    );
    this.setState({
      inmuebles: inmuebleListaNueva
    });
  };


  editarInmueble = id => {
    this.props.history.push("/inmueble/" + id);
  }

  verMas = id => {
    this.props.history.push("/VerMasNoticias/" + id);
  }
  render() {
    return (
      <Container style={style.cardGrid}>
 
      <Grid >
        <div >
        
              <CustomSlider/>
              </div> 
          </Grid>

         


      
        <Paper style={style.paper} >

                 <Typography  variant="h4"  color="inherit" >
          Obras y<br/>Actividades Municipales
        </Typography>
        
          <Grid item xs={12} sm={4} style={style.gridTextfield}>
          <Paper component="form" style={style.root}>
          <IconButton type="submit" style={style.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
          <InputBase
          style={style.input}
              fullWidth
              name="textoBusqueda"
              placeholder="Buscar obras y actividades"
              onChange={this.cambiarBusquedaTexto}
              value={this.state.textoBusqueda}
            />

          </Paper>

            
          </Grid>

         



          <Grid item xs={12} sm={12} style={style.gridTextfield}>
            <Grid container spacing={4}>
              {this.state.inmuebles.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card style={style.card}>
                    <CardMedia
                      style={style.cardMedia}
                      image={
                        card.fotos
                          ? card.fotos[0]
                            ? card.fotos[0]
                            : logo
                          : logo
                      }
                      
                    />

                    <CardContent style={style.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.ciudad}
                      </Typography>
                      <Typography gutterBottom variant="caption">
                        {"Publicado  " + card.direccion}
                      </Typography> <br/>
                      <Typography gutterBottom variant="h7" >
                        {card.pais}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small" variant="contained" color="primary" onClick={() => this.verMas(card.id)}>
                        Ver más
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} style={style.barraBoton}>
            <Grid container spacing={1} direction="column" alignItems="flex-end">
                <ButtonGroup size="small" aria-label="Small outlined group">
                <Tooltip title="Anterior">
                    <Button onClick={this.anteriorPagina}>
                      <ArrowLeft />
                    </Button>
                    </Tooltip>
                    <Tooltip title="Siguiente">
                    <Button onClick={this.siguientePagina}>
                      <ArrowRight />
                    </Button>
                    </Tooltip>
                </ButtonGroup>
            </Grid>
          </Grid>

        </Paper>
       
       
        <Grid >
        <div style={style.div}>
          <Contacto/>    
              </div> 
          </Grid>
      </Container>
    );
  }
}

export default consumerFirebase(Principal);