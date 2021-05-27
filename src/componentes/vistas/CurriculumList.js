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
  botones: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardContent: {
    flexGrow: 1,
    paddingTop: "2%",
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

  editarCurriculum = (id) => {
    this.props.history.push("/datosp/nuevo/" + id);
  };

  render() {
    return (
      <>
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

          <Grid container spacing={2}>
            {this.state.datosps.map((card) => (
              <Grid item key={card.id} xs={12} sm={12} md={12}>
                <Card style={style.card}>
                  <CardContent style={style.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.nom + " " + card.ape}
                    </Typography>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Datos Personales
                      </AccordionSummary>
                      <AccordionDetail>
                        <ul>
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
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Resumen Profesional
                      </AccordionSummary>
                      <AccordionDetail>
                        <ul>
                          <li>{card.obje}</li>
                        </ul>
                      </AccordionDetail>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Experiencia Específica
                      </AccordionSummary>
                      <AccordionDetail>
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
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        Experiencia General
                      </AccordionSummary>
                      <AccordionDetail>
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
                    </Accordion>
                  </CardContent>

                  <CardActions>
                    <Button
                      style={style.botones}
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={() => this.editarCurriculum(card.id)}
                    >
                      Editar
                    </Button>
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
          </Grid>
        </Papel>
      </>
    );
  }
}

export default consumerFirebase(NuevoCu);
