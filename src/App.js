import React, { useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import {Snackbar } from "@material-ui/core";
import AppNavBar from "./componentes/Layout/AppNavBar";
import Footer from "./componentes/Layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./componentes/theme/theme";
import RegistrarUsuario from "./componentes/Seguridad/RegistrarUsusario";
import Login from "./componentes/Seguridad/Login";
import { FirebaseContext } from "./server";
import { useStateValue } from "./sesion/store";
import RutaAutenticada from "./componentes/Seguridad/RutaAutenticada";
import PerfilUsuario from "./componentes/Seguridad/PerfilUsuario";
import LoginTelefono from "./componentes/Seguridad/LoginTelefono";
import Scroll from "./componentes/Layout/Scroll";
import NuevaPersona from "./componentes/vistas/NuevaPersona";
import NuevoDatosp from "./componentes/vistas/NuevoDatosp";
import NuevoOb from "./componentes/vistas/NuevoOb";
import CurriculumList from "./componentes/vistas/CurriculumList";
import Experiencia from "./componentes/vistas/stepForm/Experiencia";
import ExperienciaG from "./componentes/vistas/stepForm/ExperienciaG";
import Educacion from "./componentes/vistas/stepForm/Educacion";
import Cursos from "./componentes/vistas/stepForm/Cursos";
import Idiomas from "./componentes/vistas/stepForm/Idiomas";
import Herramientas from "./componentes/vistas/stepForm/Herramientas";
import Referencias from "./componentes/vistas/stepForm/Referencias";
import CurriculumEdit from "./componentes/vistas/CurriculumEdit";
import NuevoDatos from "./componentes/vistas/Nuevo/NuevoDatos";
import NuevoObs from "./componentes/vistas/Nuevo/NuevoObs";
import NuevoExpEs from "./componentes/vistas/Nuevo/NuevoExpEs";
import NuevoExpG from "./componentes/vistas/Nuevo/NuevoExpG";
import NuevoEdu from "./componentes/vistas/Nuevo/NuevoEdu";





function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [autenticacionIniciada, setupFirebaseInicial] = React.useState(false);

  const [openSnackbar, dispatch] = useStateValue();

  useEffect(() => {
    firebase.estaIniciado().then((val) => {
      setupFirebaseInicial(val);
    });
  });



  
  return autenticacionIniciada !== false ? (
    
   <React.Fragment >
      
      <Snackbar>
        anchorOrigin = {{ vertical: "bottom", horizontal: "center" }}
        open ={openSnackbar ? openSnackbar.open : false}
        autoHideDuration={3000}
        contentProps=
        {{
          "aria-describedBy": "message-id",
        }}
        message=
        {
          <span id="message-id">
            {openSnackbar ? openSnackbar.mensaje : ""}
          </span>
        }
        onClose =
        {() =>
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: false,
              mensaje: "",
            },
          })
        }
      </Snackbar>

      <Router>
     
      
     
        <MuiThemeProvider theme={theme}>
          
          

          <AppNavBar />
          <div  className="App-header">
         <Scroll showBelow={250}/>

          
          

          <Grid container>
            <Switch>
              
               <RutaAutenticada
                exact
                path="/auth/perfil"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={PerfilUsuario}
              />
               <RutaAutenticada
                exact
                path="/editar/datosp/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoDatosp}
              />

              <RutaAutenticada
                exact
                path="/editar/experiencia/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Experiencia}
              />
               <RutaAutenticada
                exact
                path="/editar/experienciag/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={ExperienciaG}
              />
              <RutaAutenticada
                exact
                path="/editar/educacion/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Educacion}
              />
               <RutaAutenticada
                exact
                path="/editar/idiomas/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Idiomas}
              />
               <RutaAutenticada
                exact
                path="/editar/referencias/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Referencias}
              />

<RutaAutenticada
                exact
                path="/editar/herramientas/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Herramientas}
              />
               <RutaAutenticada
                exact
                path="/editar/cursos/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos}
              />
            
              
                
             
                <RutaAutenticada
                exact
                path="/"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={CurriculumList}
              />
                <RutaAutenticada
                exact
                path="/curriculum/edit/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={CurriculumEdit}
              />

              <RutaAutenticada
                exact
                path="/edit/datos/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoDatosp}
              />
              <RutaAutenticada
                exact
                path="/nuevo/datos/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoDatos}
              />
                <RutaAutenticada
                exact
                path="/nuevo/objetivo/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoObs}
              />
               <RutaAutenticada
                exact
                path="/nuevo/experienciae/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoExpEs}
              />
 <RutaAutenticada
                exact
                path="/nuevo/experienciag/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoExpG}
              />
              <RutaAutenticada
                exact
                path="/nuevo/edu/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoEdu}
              />
              <RutaAutenticada
                exact
                path="/editar/objetivo/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevoOb}
              />
            

              <RutaAutenticada
                exact
                path="/persona/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevaPersona}
              />
              
              
              <Route
                path="/auth/registrar"
                exact
                component={RegistrarUsuario}
              ></Route>
              

              <Route path="/auth/Login" exact component={Login}></Route>
              <Route path="/auth/LoginTelefono" exact component={LoginTelefono}></Route>
            </Switch>
          </Grid>

          <Footer/>
          </div>
        </MuiThemeProvider>
      </Router>

      
      
    </React.Fragment>
    
  ) : null;
}

export default App;
