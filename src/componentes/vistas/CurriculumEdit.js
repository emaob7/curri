import React, { Component } from "react";
import {
  Grid,
  Button,
  IconButton,
  Typography,
  CardActions,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  AccordionActions,
  AccordionSummary,
  Accordion,
  

} from "@material-ui/core";

import AccordionDetail from "@material-ui/core/AccordionDetails";
import { consumerFirebase } from "../../server";
import { Link } from "react-router-dom";
import Papel from "../Children/Papel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import Agregar from "../Children/Agregar";

const style = {
  
  icon: {
    marginRight: 0.5,
    width: 20,
    height: 20,
  },
  link: {
    display: "flex",
  },
    
  div: {
    marginBottom: 22,
    backgroundColor: "#0071bc",
    width: 80,
    height: 5,
  },

  gridTextfield: {
    marginTop: "20px",
    marginBottom: "-20px",
  },
  boton: {
    marginTop: "-1%",
    marginBottom: "10px",
    marginLeft: "5%",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  acordeon: {
    paddingTop: "0px",
    paddingBottom: "1%",
    marginTop: "-3%",
    marginBottom: "1%",
    
  },

  cardContent: {
    flexGrow: 1,
    paddingTop: "4px",
    paddingBottom: "1%",
  },
  barraBoton: {
    marginTop: "20px",
  },
};

class CurriculumEdit extends Component {
  state = {
    datosp: [],
  };
 
  async componentDidMount() {
    const {id} = this.props.match.params;
    
    const datospCollection = this.props.firebase.db.collection("Datosps");
    const datospDB = await datospCollection.doc(id).get();

    this.setState({
      datosp : datospDB.data()
    })
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

  editarDatosp = () => {
    const {id} = this.props.match.params;
    this.props.history.push("/editar/datosp/" + id);
  };

  editarResumen = () => {
    const {id} = this.props.match.params;
    this.props.history.push("/editar/objetivo/" + id);
  };

  editarExperiencia = () => {
    const {id} = this.props.match.params;
    this.props.history.push("/editar/experiencia/" + id);
  };
/*
  editarExperienciag = () => {
    this.props.history.push("/editar/experienciag/" + id);
  };

  editarEducacion = () => {
    this.props.history.push("/editar/educacion/" + id);
  };

  editarEducacion = () => {
    this.props.history.push("/editar/educacion/" + id);
  };

  editarCursos = () => {
    this.props.history.push("/editar/cursos/" + id);
  };

  editarIdiomas = () => {
    this.props.history.push("/editar/idiomas/" + id);
  };

  editarHerramientas = () => {
    this.props.history.push("/editar/herramientas/" + id);
  };
*/
  editarReferencias = () => {
    const {id} = this.props.match.params;
    this.props.history.push("/editar/referencias/" + id);
  };

  render() {
    return (
      <>
      <Grid container spacing={2}>
      <Grid item  xs={12} sm={12} md={12}>
        <Papel>
          <Typography variant="h6" color="textSecondary">
            Secciones de su Curriculum
          </Typography>
         


          
           
              <Grid item  xs={12} sm={12} md={12}>
                <div style={style.card}>
                  
                    <Typography gutterBottom variant="h6" component="h2">
                      {this.state.datosp.nom + " " + this.state.datosp.ape}
                    </Typography>
                    
                    <Accordion >
                   
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        Datos Personales
                      </AccordionSummary>
                      <AccordionDetail style={style.acordeon}>
                        <ul >
                          <li> Nombre Completo: {this.state.datosp.nom + " " + this.state.datosp.ape}</li>
                          <li>CIN/ DNI: {this.state.datosp.cin}</li>
                          <li>Profesión: {this.state.datosp.prof}</li>
                          <li>Número Profesional: {this.state.datosp.nprof}</li>
                          <li>Nacionalidad: {this.state.datosp.naci}</li>
                          <li>Fecha de Nacimiento: {this.state.datosp.fena}</li>
                          <li>Direccion: {this.state.datosp.dir}</li>
                          <li>Telefono: {this.state.datosp.tel}</li>
                          <li>Correo: {this.state.datosp.email}</li>
                        </ul>
                        
                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarDatosp()}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Resumen Profesional
                      </AccordionSummary>
                      {this.state.datosp.obje? 
                      <AccordionDetail style={style.acordeon}>
                        <ul>
                          <li>{this.state.datosp.obje}</li>
                        </ul>
                      </AccordionDetail>
                      :<Agregar/>}
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarResumen(this.state.datosp.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Experiencia Específica
                      </AccordionSummary>
                      {this.state.datosp.empre? 
                      <AccordionDetail style={style.acordeon}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Puesto</TableCell>
                              <TableCell>Empresa Institución</TableCell>
                              <TableCell>Ubicación</TableCell>
                              <TableCell>Desde</TableCell>
                              <TableCell>Hasta</TableCell>
                              <TableCell>Tareas realizadas</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                              <TableRow >
                                <TableCell>{this.state.datosp.puesto}</TableCell>
                                <TableCell>{this.state.datosp.empre}</TableCell>
                                <TableCell>{this.state.datosp.ubicacion}</TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {this.state.datosp.finicio}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {this.state.datosp.ffinal}
                                  </Typography>
                                </TableCell>
                                <TableCell>{this.state.datosp.tareas}</TableCell>
                                <TableCell><IconButton
                      size="small"
                      color="primary"
                      onClick={() => this.editarExperienciag()}
                    ><EditIcon /> 
                    </IconButton></TableCell>
                    
                              </TableRow>
                              {this.state.datosp.empre2?
                              <TableRow >
                                <TableCell>{this.state.datosp.puesto2}</TableCell>
                                <TableCell>{this.state.datosp.empre2}</TableCell>
                                <TableCell>{this.state.datosp.ubicacion2}</TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {this.state.datosp.finicio2}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {this.state.datosp.ffinal2}
                                  </Typography>
                                </TableCell>
                                <TableCell>{this.state.datosp.tareas2}</TableCell>
                                <TableCell><IconButton
                      size="small"
                      color="primary"
                      onClick={() => this.editarExperienciag()}
                    ><EditIcon /> 
                    </IconButton></TableCell>
                              </TableRow>
                              :<Agregar/>}
{this.state.datosp.empre3?
  <TableRow >
    <TableCell>{this.state.datosp.puesto3}</TableCell>
    <TableCell>{this.state.datosp.empre3}</TableCell>
    <TableCell>{this.state.datosp.ubicacion3}</TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.finicio3}
      </Typography>
    </TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.ffinal3}
      </Typography>
    </TableCell>
    <TableCell>{this.state.datosp.tareas3}</TableCell>
    <TableCell><IconButton
size="small"
color="primary"
onClick={() => this.editarExperienciag()}
><EditIcon /> 
</IconButton></TableCell>
  </TableRow>
  :<Agregar/>}

{this.state.datosp.empre4?
  <TableRow >
    <TableCell>{this.state.datosp.puesto4}</TableCell>
    <TableCell>{this.state.datosp.empre4}</TableCell>
    <TableCell>{this.state.datosp.ubicacion4}</TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.finicio4}
      </Typography>
    </TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.ffinal4}
      </Typography>
    </TableCell>
    <TableCell>{this.state.datosp.tareas4}</TableCell>
    <TableCell><IconButton
size="small"
color="primary"
onClick={() => this.editarExperienciag()}
><EditIcon /> 
</IconButton></TableCell>
  </TableRow>
  :<Agregar/>}
                            
                          </TableBody>  
                        </Table>
                      </AccordionDetail>
                      :<Agregar/>}
                     
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Experiencia General
                      </AccordionSummary>
                      {this.state.datosp.empreg? 
                      <AccordionDetail style={style.acordeon}>
                        
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Puesto</TableCell>
                              <TableCell>Empresa Institución</TableCell>
                              <TableCell>Ubicación</TableCell>
                              <TableCell>Desde</TableCell>
                              <TableCell>Hasta</TableCell>
                              <TableCell>Tareas realizadas</TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                              <TableRow >
                                <TableCell>{this.state.datosp.puestog}</TableCell>
                                <TableCell>{this.state.datosp.empreg}</TableCell>
                                <TableCell>{this.state.datosp.ubicaciong}</TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {this.state.datosp.finiciog}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {this.state.datosp.ffinalg}
                                  </Typography>
                                </TableCell>
                                <TableCell>{this.state.datosp.tareasg}</TableCell>
                                <TableCell><IconButton
size="small"
color="primary"
onClick={() => this.editarExperienciag()}
><EditIcon /> 
</IconButton></TableCell>
                              </TableRow>
   {this.state.datosp.emprg2?
  <TableRow >
    <TableCell>{this.state.datosp.puestg2}</TableCell>
    <TableCell>{this.state.datosp.emprg2}</TableCell>
    <TableCell>{this.state.datosp.ubicaciog2}</TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.finicig2}
      </Typography>
    </TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.ffinag2}
      </Typography>
    </TableCell>
    <TableCell>{this.state.datosp.tareag2}</TableCell>
    <TableCell><IconButton
size="small"
color="primary"
onClick={() => this.editarExperienciag()}
><EditIcon /> 
</IconButton></TableCell>
  </TableRow>
  :<Agregar/>}
     {this.state.datosp.emprg3?
  <TableRow >
    <TableCell>{this.state.datosp.puestg3}</TableCell>
    <TableCell>{this.state.datosp.emprg3}</TableCell>
    <TableCell>{this.state.datosp.ubicaciog3}</TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.finicig3}
      </Typography>
    </TableCell>
    <TableCell>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
      >
        {this.state.datosp.ffinag3}
      </Typography>
    </TableCell>
    <TableCell>{this.state.datosp.tareag3}</TableCell>
    <TableCell><IconButton
size="small"
color="primary"
onClick={() => this.editarExperienciag()}
><EditIcon /> 
</IconButton></TableCell>
  </TableRow>
  :<Agregar/>}
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                     :<Agregar/>}

                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Educación
                      </AccordionSummary>
                      {this.state.datosp.edu? 
                      <AccordionDetail style={style.acordeon}> 
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Titulo de Grado</TableCell>
                              <TableCell>Institución</TableCell>
                              <TableCell>Duración</TableCell>
                              <TableCell>Fecha de Culminación</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                           
                              <TableRow >
                                <TableCell>{this.state.datosp.tit}</TableCell>
                                <TableCell>{this.state.datosp.ins}</TableCell>
                                <TableCell>{this.state.datosp.dur}</TableCell>
                                <TableCell>{this.state.datosp.cul}</TableCell>
                              </TableRow>
                            
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                      :<Agregar/>}
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarEducacion()}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Capacitaciones y otros Cursos
                      </AccordionSummary>
                      {this.state.datosp.cur? 
                      <AccordionDetail style={style.acordeon}>
                        
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Titulo de Grado</TableCell>
                              <TableCell>Institución</TableCell>
                              <TableCell>Duración</TableCell>
                              <TableCell>Fecha de Culminación</TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            
                              <TableRow >
                                <TableCell>{this.state.datosp.tit}</TableCell>
                                <TableCell>{this.state.datosp.ins}</TableCell>
                                <TableCell>{this.state.datosp.dur}</TableCell>
                                <TableCell>{this.state.datosp.cul}</TableCell>
                              </TableRow>
                            
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      :<Agregar/>}
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarCursos()}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Idiomas
                      </AccordionSummary>
                      {this.state.datosp.idi?
                      <AccordionDetail style={style.acordeon}> 
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Idioma</TableCell>
                              <TableCell>Nivel</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            
                              <TableRow >
                                <TableCell>{this.state.datosp.idio}</TableCell>
                                <TableCell>{this.state.datosp.niv}</TableCell>
                              </TableRow>
                            
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      :<Agregar/>}
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarIdiomas()}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Herramientas y Habilidades
                      </AccordionSummary>
                      {this.state.datosp.herra?
                      <AccordionDetail style={style.acordeon}> 
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Habilidades</TableCell>
                              <TableCell>Nivel</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                           
                              <TableRow >
                                <TableCell>{this.state.datosp.her}</TableCell>
                                <TableCell>{this.state.datosp.niv}</TableCell>
                              </TableRow>
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      :<Agregar/>}
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarHerramientas()}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Referencias
                      </AccordionSummary>
                      {this.state.datosp.refe?
                      <AccordionDetail style={style.acordeon}> 
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Nombre Completo</TableCell>
                              <TableCell>Teléfono</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            
                              <TableRow >
                                <TableCell>{this.state.datosp.nom}</TableCell>
                                <TableCell>{this.state.datosp.tel}</TableCell>
                              </TableRow>
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      :<Agregar/>}
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarReferencias()}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                  <CardActions>
                  <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarReferencias()}
                    > Editar
                    </Button>
                   
                  </CardActions>
                </div>
              </Grid>
            
          
        </Papel>
        </Grid>
        </Grid>
      </>
    );
  }
}

export default consumerFirebase(CurriculumEdit);
