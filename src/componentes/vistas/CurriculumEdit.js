import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { consumerFirebase } from "../../server";
import { Link } from "react-router-dom";
import Papel from "../Children/Papel";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionActions from '@material-ui/core/AccordionActions';
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8,
  },
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

class NuevoCu extends Component {
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

  editarDatosp = (id) => {
    this.props.history.push("/datosp/nuevo/" + id);
  };

  editarResumen = (id) => {
    this.props.history.push("/objetivo/nuevo/" + id);
  };

  editarExperiencia = (id) => {
    this.props.history.push("/experiencia/nuevo/" + id);
  };

  editarExperienciag = (id) => {
    this.props.history.push("/experienciag/nuevo/" + id);
  };

  editarEducacion = (id) => {
    this.props.history.push("/educacion/nuevo/" + id);
  };

  editarEducacion = (id) => {
    this.props.history.push("/educacion/nuevo/" + id);
  };

  editarCursos = (id) => {
    this.props.history.push("/cursos/nuevo/" + id);
  };

  editarIdiomas = (id) => {
    this.props.history.push("/idiomas/nuevo/" + id);
  };

  editarHerramientas = (id) => {
    this.props.history.push("/herramientas/nuevo/" + id);
  };

  editarReferencias = (id) => {
    this.props.history.push("/referencias/nuevo/" + id);
  };

  render() {
    return (
      <>
      <Grid container spacing={2}>
      <Grid item  xs={12} sm={12} md={12}>
        <Papel>
          <Typography variant="h4" color="textSecondary">
            Curriculums
          </Typography>
          <div style={style.div}></div>

          <Button
            style={style.botones}
            variant="outlined"
            size="small"
            color="primary"
            component={Link}
            button
            to="/step/nuevo/"
          >
            Nuevo
          </Button>

          
            {this.state.datosps.map((card) => (
              <Grid item key={card.id} xs={12} sm={12} md={12}>
                <Card style={style.card}>
                  <CardContent style={style.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.nom + " " + card.ape}
                    </Typography>
                    
                    <Accordion >
                   
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        Datos Personales
                      </AccordionSummary>
                      <AccordionDetail style={style.acordeon}>
                        <ul >
                          <li> Nombre Completo: {card.nom + " " + card.ape}</li>
                          <li>CIN/ DNI: {card.cin}</li>
                          <li>Profesión: {card.prof}</li>
                          <li>Número Profesional: {card.nprof}</li>
                          <li>Nacionalidad: {card.naci}</li>
                          <li>Fecha de Nacimiento: {card.fena}</li>
                          <li>Direccion: {card.dir}</li>
                          <li>Telefono: {card.tel}</li>
                          <li>Correo: {card.email}</li>
                        </ul>
                        
                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarDatosp(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Resumen Profesional
                      </AccordionSummary>
                      <AccordionDetail style={style.acordeon}>
                        <ul>
                          <li>{card.obje}</li>
                        </ul>
                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarResumen(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>
  <Accordion>

                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Experiencia Específica
                      </AccordionSummary>
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
                            {card.expe.map((exp) => (
                                
                              <TableRow key={exp.id2}>
                                <TableCell>{exp.puesto}</TableCell>
                                <TableCell>{exp.empre}</TableCell>
                                <TableCell>{exp.ubicacion}</TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {exp.finicio}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {exp.ffinal}
                                  </Typography>
                                </TableCell>
                                <TableCell>{exp.tareas}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarExperiencia(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>
                    
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Experiencia General
                      </AccordionSummary>
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
                            {card.expeG.map((exp) => (
                              <TableRow key={exp.id2}>
                                <TableCell>{exp.puesto}</TableCell>
                                <TableCell>{exp.empre}</TableCell>
                                <TableCell>{exp.ubicacion}</TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {exp.finicio}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {exp.ffinal}
                                  </Typography>
                                </TableCell>
                                <TableCell>{exp.tareas}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarExperienciag(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Educación
                      </AccordionSummary>
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
                            {card.edu.map((ed) => (
                              <TableRow key={ed.id2}>
                                <TableCell>{ed.tit}</TableCell>
                                <TableCell>{ed.ins}</TableCell>
                                <TableCell>{ed.dur}</TableCell>
                                <TableCell>{ed.cul}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarEducacion(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Capacitaciones y otros Cursos
                      </AccordionSummary>
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
                            {card.cur.map((cu) => (
                              <TableRow key={cu.id2}>
                                <TableCell>{cu.tit}</TableCell>
                                <TableCell>{cu.ins}</TableCell>
                                <TableCell>{cu.dur}</TableCell>
                                <TableCell>{cu.cul}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarCursos(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Idiomas
                      </AccordionSummary>
                      <AccordionDetail style={style.acordeon}> 
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Idioma</TableCell>
                              <TableCell>Nivel</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {card.idi.map((idis) => (
                              <TableRow key={idis.id2}>
                                <TableCell>{idis.idio}</TableCell>
                                <TableCell>{idis.niv}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarIdiomas(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Herramientas y Habilidades
                      </AccordionSummary>
                      <AccordionDetail style={style.acordeon}> 
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Habilidades</TableCell>
                              <TableCell>Nivel</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {card.herra.map((herr) => (
                              <TableRow key={herr.id2}>
                                <TableCell>{herr.her}</TableCell>
                                <TableCell>{herr.niv}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarHerramientas(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Referencias
                      </AccordionSummary>
                      <AccordionDetail style={style.acordeon}> 
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Nombre Completo</TableCell>
                              <TableCell>Teléfono</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {card.refe.map((refes) => (
                              <TableRow key={refes.id2}>
                                <TableCell>{refes.nom}</TableCell>
                                <TableCell>{refes.tel}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>

                      </AccordionDetail>
                      <AccordionActions>
                        <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarReferencias(card.id)}
                    > Editar
                    </Button>
                    </AccordionActions>
                    </Accordion>
                  </CardContent>

                  <CardActions>
                    
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={() => this.eliminarDatosps(card.id)}
                    >
                      Eliminar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          
        </Papel>
        </Grid>
        </Grid>
      </>
    );
  }
}

export default consumerFirebase(NuevoCu);
