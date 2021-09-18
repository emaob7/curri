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
import Papel from "../Children/Papel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Plantilla1 from "./Plantillas/Plantilla1";

const style = {
  icon: {
    marginRight: 0.5,
    width: 20,
    height: 20,
  },
  boton: {
    marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "10px",
    display: "flex",
  },
  acordeon: {
    paddingTop: "0px",
    paddingBottom: "1%",
    marginTop: "-3%",
    marginBottom: "1%",
  },  
};

class CurriculumEdit extends Component {
  state = {
    datosp: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const datospCollection = this.props.firebase.db.collection("Datosps");
    const datospDB = await datospCollection.doc(id).get();

    this.setState({
      datosp: datospDB.data(),
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

  editarDatosp = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/datosp/" + id);
  };

  editarResumen = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/objetivo/" + id);
  };

  editarExperiencia1 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/experienciae/" + id);
  };
  editarExperiencia2 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/experienciae2/" + id);
  };
  editarExperiencia3 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/experienciae3/" + id);
  };
  editarExperiencia4 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/experienciae4/" + id);
  };
  editarExperienciag = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/experienciag/" + id);
  };
  editarExperienciag2 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/experienciag2/" + id);
  };
  editarExperienciag3 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/experienciag3/" + id);
  };
  editarEducacion = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/educacion/" + id);
  };
  editarEducacion2 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/educacion2/" + id);
  };
  editarEducacion3 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/educacion3/" + id);
  };
  editarEducacion4 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/educacion4/" + id);
  };
  editarCursos = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos/" + id);
  };
  editarCursos2 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos2/" + id);
  };
  editarCursos3 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos3/" + id);
  };
  editarCursos4 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos4/" + id);
  };
  editarCursos5 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos5/" + id);
  };
  editarCursos6 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos6/" + id);
  };
  editarCursos7 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos7/" + id);
  };
  editarCursos8 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos8/" + id);
  };
  editarCursos9 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos9/" + id);
  };
  editarCursos10 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/cursos10/" + id);
  };
  editarIdiomas = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/idiomas/" + id);
  };
  editarIdiomas2 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/idiomas2/" + id);
  };
  editarIdiomas3 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/idiomas3/" + id);
  };
  editarIdiomas4 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/idiomas4/" + id);
  };
  editarIdiomas5 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/idiomas5/" + id);
  };
  editarHerramientas = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/herramientas/" + id);
  };
  editarHerramientas2 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/herramientas2/" + id);
  };
  editarHerramientas3 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/herramientas3/" + id);
  };
  editarHerramientas4 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/herramientas4/" + id);
  };
  editarHerramientas5 = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/herramientas5/" + id);
  };

  editarReferencias = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/editar/referencias/" + id);
  };

  render() {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Papel>
              <Typography variant="h6" color="textSecondary">
                Secciones de su Curriculum
              </Typography>
              <Grid item xs={12} sm={12} md={12}>
                <div style={style.card}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {this.state.datosp.nom + " " + this.state.datosp.ape}
                  </Typography>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Datos Personales
                    </AccordionSummary>
                    <AccordionDetail style={style.acordeon}>
                      <ul>
                        <li>
                          {" "}
                          Nombre Completo:{" "}
                          {this.state.datosp.nom + " " + this.state.datosp.ape}
                        </li>
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
                      >
                        {"Editar"}
                      </Button>
                    </AccordionActions>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Perfil
                    </AccordionSummary>
                    {this.state.datosp.obje ? (
                      <AccordionDetail style={style.acordeon}>
                        <ul>
                          <li>{this.state.datosp.obje}</li>
                        </ul>
                        <Button
                        size="small"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() => this.editarResumen(this.state.datosp.id)}
                      >
                        {"Editar"}
                        
                      </Button>
                      </AccordionDetail>
                    ) : (
                      <Button
                      style={style.boton}
                      size="small"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => this.editarResumen()}
                    >
                      Agregar
                    </Button>
                    )}
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Experiencia Específica
                    </AccordionSummary>
                    {this.state.datosp.empre? (
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
                            <TableRow>
                              <TableCell>{this.state.datosp.puesto}</TableCell>
                              <TableCell>{this.state.datosp.empre}</TableCell>
                              <TableCell>
                                {this.state.datosp.ubicacion}
                              </TableCell>
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
                              <TableCell>
                                <IconButton
                                  size="small"
                                  color="primary"
                                  onClick={() => this.editarExperiencia1()}
                                >
                                  <EditIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                            {this.state.datosp.empre2 ? (
                              <TableRow>
                                <TableCell>
                                  {this.state.datosp.puesto2}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.empre2}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.ubicacion2}
                                </TableCell>
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
                                <TableCell>
                                  {this.state.datosp.tareas2}
                                </TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarExperiencia2()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarExperiencia2()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.empre3 ? (
                              <TableRow>
                                <TableCell>
                                  {this.state.datosp.puesto3}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.empre3}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.ubicacion3}
                                </TableCell>
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
                                <TableCell>
                                  {this.state.datosp.tareas3}
                                </TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarExperiencia3()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarExperiencia3()}
                            >
                              Agregar
                            </Button>
                            )}

                            {this.state.datosp.empre4 ? (
                              <TableRow>
                                <TableCell>
                                  {this.state.datosp.puesto4}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.empre4}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.ubicacion4}
                                </TableCell>
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
                                <TableCell>
                                  {this.state.datosp.tareas4}
                                </TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarExperiencia4()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarExperiencia4()}
                            >
                              Agregar
                            </Button>
                            )}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                    ) : (
                      <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarExperiencia1()}
                            >
                              Agregar
                            </Button>
                    )}
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Experiencia General
                    </AccordionSummary>
                    {this.state.datosp.puestog ? (
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
                         
                              <TableRow>
                                <TableCell>
                                  {this.state.datosp.puestog}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.empreg}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.ubicaciong}
                                </TableCell>
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
                                <TableCell>
                                  {this.state.datosp.tareasg}
                                </TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarExperienciag()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                           
                            {this.state.datosp.emprg2 ? (
                              <TableRow>
                                <TableCell>
                                  {this.state.datosp.puestg2}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.emprg2}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.ubicaciog2}
                                </TableCell>
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
                                <TableCell>
                                  {this.state.datosp.tareag2}
                                </TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarExperienciag2()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarExperienciag2()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.emprg3 ? (
                              <TableRow>
                                <TableCell>
                                  {this.state.datosp.puestg3}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.emprg3}
                                </TableCell>
                                <TableCell>
                                  {this.state.datosp.ubicaciog3}
                                </TableCell>
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
                                <TableCell>
                                  {this.state.datosp.tareag3}
                                </TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarExperienciag3()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarExperienciag3()}
                            >
                              Agregar
                            </Button>
                            )}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                    ) : (
                      <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarExperienciag()}
                            >
                              Agregar
                            </Button>
                    )}
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Educación
                    </AccordionSummary>
                    {this.state.datosp.tite ? (
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
                            <TableRow>
                              <TableCell>{this.state.datosp.tite}</TableCell>
                              <TableCell>{this.state.datosp.inse}</TableCell>
                              <TableCell>{this.state.datosp.dure}</TableCell>
                              <TableCell>{this.state.datosp.cule}</TableCell>
                              <TableCell>
                                <IconButton
                                  size="small"
                                  color="primary"
                                  onClick={() => this.editarEducacion()}
                                >
                                  <EditIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                            {this.state.datosp.tite2 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tite2}</TableCell>
                                <TableCell>{this.state.datosp.inse2}</TableCell>
                                <TableCell>{this.state.datosp.dure2}</TableCell>
                                <TableCell>{this.state.datosp.cule2}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarEducacion2()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarEducacion2()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tite3 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tite3}</TableCell>
                                <TableCell>{this.state.datosp.inse3}</TableCell>
                                <TableCell>{this.state.datosp.dure3}</TableCell>
                                <TableCell>{this.state.datosp.cule3}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarEducacion3()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarEducacion3()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tite4 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tite4}</TableCell>
                                <TableCell>{this.state.datosp.inse4}</TableCell>
                                <TableCell>{this.state.datosp.dure4}</TableCell>
                                <TableCell>{this.state.datosp.cule4}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarEducacion4()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarEducacion4()}
                            >
                              Agregar
                            </Button>
                            )}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                    ) : (
                      <Button
                      style={style.boton}
                      size="small"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => this.editarEducacion()}
                    >
                      Agregar
                    </Button>
                    )}
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Capacitaciones y otros Cursos
                    </AccordionSummary>
                    {this.state.datosp.tit ? (
                      <AccordionDetail style={style.acordeon}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Titulo/ Certificado</TableCell>
                              <TableCell>Institución</TableCell>
                              <TableCell>Duración</TableCell>
                              <TableCell>Fecha de Culminación</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>{this.state.datosp.tit}</TableCell>
                              <TableCell>{this.state.datosp.ins}</TableCell>
                              <TableCell>{this.state.datosp.dur}</TableCell>
                              <TableCell>{this.state.datosp.cul}</TableCell>
                              <TableCell>
                                <IconButton
                                  size="small"
                                  color="primary"
                                  onClick={() => this.editarCursos()}
                                >
                                  <EditIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                            {this.state.datosp.tit2 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit2}</TableCell>
                                <TableCell>{this.state.datosp.ins2}</TableCell>
                                <TableCell>{this.state.datosp.dur2}</TableCell>
                                <TableCell>{this.state.datosp.cul2}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos2()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos2()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tit3 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit3}</TableCell>
                                <TableCell>{this.state.datosp.ins3}</TableCell>
                                <TableCell>{this.state.datosp.dur3}</TableCell>
                                <TableCell>{this.state.datosp.cul3}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos3()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos3()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tit4 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit4}</TableCell>
                                <TableCell>{this.state.datosp.ins4}</TableCell>
                                <TableCell>{this.state.datosp.dur4}</TableCell>
                                <TableCell>{this.state.datosp.cul4}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.EditarCursos4()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos4()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tit5 ? (
                            <TableRow>
                              <TableCell>{this.state.datosp.tit5}</TableCell>
                              <TableCell>{this.state.datosp.ins5}</TableCell>
                              <TableCell>{this.state.datosp.dur5}</TableCell>
                              <TableCell>{this.state.datosp.cul5}</TableCell>
                              <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos5()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                            </TableRow>
                             ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos5()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tit6 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit6}</TableCell>
                                <TableCell>{this.state.datosp.ins6}</TableCell>
                                <TableCell>{this.state.datosp.dur6}</TableCell>
                                <TableCell>{this.state.datosp.cul6}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos6()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos6()}
                            >
                              Agregar
                            </Button>
                            )}

                            {this.state.datosp.tit7 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit7}</TableCell>
                                <TableCell>{this.state.datosp.ins7}</TableCell>
                                <TableCell>{this.state.datosp.dur7}</TableCell>
                                <TableCell>{this.state.datosp.cul7}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos7()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos7()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tit8 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit8}</TableCell>
                                <TableCell>{this.state.datosp.ins8}</TableCell>
                                <TableCell>{this.state.datosp.dur8}</TableCell>
                                <TableCell>{this.state.datosp.cul8}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos8()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos8()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tit9 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit9}</TableCell>
                                <TableCell>{this.state.datosp.ins9}</TableCell>
                                <TableCell>{this.state.datosp.dur9}</TableCell>
                                <TableCell>{this.state.datosp.cul9}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos9()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos9()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.tit10 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.tit10}</TableCell>
                                <TableCell>{this.state.datosp.ins10}</TableCell>
                                <TableCell>{this.state.datosp.dur10}</TableCell>
                                <TableCell>{this.state.datosp.cul10}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarCursos10()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos10()}
                            >
                              Agregar
                            </Button>
                            )}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                    ) : (
                      <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarCursos()}
                            >
                              Agregar
                            </Button>
                    )}
                    
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Idiomas
                    </AccordionSummary>
                    {this.state.datosp.idi ? (
                      <AccordionDetail style={style.acordeon}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Idioma</TableCell>
                              <TableCell>Nivel</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>{this.state.datosp.idi}</TableCell>
                              <TableCell>{this.state.datosp.niv}</TableCell>
                              <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarIdiomas()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                            </TableRow>
                            {this.state.datosp.idi2 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.idi2}</TableCell>
                                <TableCell>{this.state.datosp.niv2}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarIdiomas2()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarIdiomas2()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.idi3 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.idi3}</TableCell>
                                <TableCell>{this.state.datosp.niv3}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarIdiomas3()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarIdiomas3()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.idi4 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.idi4}</TableCell>
                                <TableCell>{this.state.datosp.niv4}</TableCell>

                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarIdiomas4()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarIdiomas4()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.idi5 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.idi5}</TableCell>
                                <TableCell>{this.state.datosp.niv5}</TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarIdiomas5()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarIdiomas5()}
                            >
                              Agregar
                            </Button>
                            )}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                    ) : (
                      <Button
                      style={style.boton}
                      size="small"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => this.editarIdiomas()}
                    >
                      Agregar
                    </Button>
                    )}
                   
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Herramientas y Habilidades
                    </AccordionSummary>
                    {this.state.datosp.her ? (
                      <AccordionDetail style={style.acordeon}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Habilidades</TableCell>
                              <TableCell>Nivel</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>{this.state.datosp.her}</TableCell>
                              <TableCell>{this.state.datosp.nive}</TableCell>
                              <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarHerramientas()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                            </TableRow>
                            {this.state.datosp.her2 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.her2}</TableCell>
                                <TableCell>{this.state.datosp.nive2}</TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarHerramientas2()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarHerramientas2()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.her3 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.her3}</TableCell>
                                <TableCell>{this.state.datosp.nive3}</TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarHerramientas3()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarHerramientas3()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.her4 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.her4}</TableCell>
                                <TableCell>{this.state.datosp.nive4}</TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarHerramientas4()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarHerramientas4()}
                            >
                              Agregar
                            </Button>
                            )}
                            {this.state.datosp.her5 ? (
                              <TableRow>
                                <TableCell>{this.state.datosp.her5}</TableCell>
                                <TableCell>{this.state.datosp.nive5}</TableCell>
                                <TableCell>
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => this.editarHerramientas5()}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarHerramientas5()}
                            >
                              Agregar
                            </Button>
                            )}
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                    ) : (
                      <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarHerramientas()}
                            >
                              Agregar
                            </Button>
                    )}
            
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Referencias
                    </AccordionSummary>
                    {this.state.datosp.ref1 ? (
                      <AccordionDetail style={style.acordeon}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Nombre Completo</TableCell>
                              <TableCell>Teléfono</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>{this.state.datosp.ref1}</TableCell>
                              <TableCell>{this.state.datosp.tel1}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>{this.state.datosp.ref2}</TableCell>
                              <TableCell>{this.state.datosp.tel2}</TableCell>
                            </TableRow>
                            <Button
                        size="small"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() => this.editarReferencias()}
                      >
                        
                        Editar
                      </Button>
                          </TableBody>
                        </Table>
                      </AccordionDetail>
                    ) : (
                      <Button
                              style={style.boton}
                              size="small"
                              color="primary"
                              startIcon={<AddIcon />}
                              onClick={() => this.editarReferencias()}
                            >
                              Agregar
                            </Button>
                    )}
                  </Accordion>

                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => this.editarReferencias()}
                    >
                      Editar
                    </Button>
                  </CardActions>
                </div>
              </Grid>
            </Papel>
          </Grid>
        </Grid>
        <Plantilla1 datos={this.state.datosp}/>
      </>
    );
  }
}

export default consumerFirebase(CurriculumEdit);