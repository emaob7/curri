import React, { useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import {Snackbar } from "@material-ui/core";
import AppNavBar from "./componentes/Layout/AppNavBar";
/*import Footer from "./componentes/Layout/Footer";*/
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
import EditarDatosp from "./componentes/vistas/EditarDatosp";
import EditarResumen from "./componentes/vistas/EditarResumen";
import CurriculumList from "./componentes/vistas/CurriculumList";
/*import EditarExperiencia from "./componentes/vistas/stepForm/EditarExperiencia";*/
import ExperienciaG from "./componentes/vistas/stepForm/ExperienciaG";
import Educacion from "./componentes/vistas/Nuevo/Educacion";
import Educacion2 from "./componentes/vistas/Nuevo/Educacion2";
import Educacion3 from "./componentes/vistas/Nuevo/Educacion3";
import Cursos from "./componentes/vistas/stepForm/Cursos";
import Cursos2 from "./componentes/vistas/stepForm/Cursos2";
import Cursos3 from "./componentes/vistas/stepForm/Cursos3";
import Cursos4 from "./componentes/vistas/stepForm/Cursos4";
import Cursos5 from "./componentes/vistas/stepForm/Cursos5";
import Cursos6 from "./componentes/vistas/stepForm/Cursos6";
import Cursos7 from "./componentes/vistas/stepForm/Cursos7";
import Cursos8 from "./componentes/vistas/stepForm/Cursos8";
import Cursos9 from "./componentes/vistas/stepForm/Cursos9";
import Cursos10 from "./componentes/vistas/stepForm/Cursos10";
import Idiomas from "./componentes/vistas/stepForm/Idiomas";
import Idiomas2 from "./componentes/vistas/stepForm/Idiomas2";
import Idiomas3 from "./componentes/vistas/stepForm/Idiomas3";
import Idiomas4 from "./componentes/vistas/stepForm/Idiomas4";
import Idiomas5 from "./componentes/vistas/stepForm/Idiomas5";
import Herramientas from "./componentes/vistas/stepForm/Herramientas";
import Herramientas2 from "./componentes/vistas/stepForm/Herramientas2";
import Herramientas3 from "./componentes/vistas/stepForm/Herramientas3";
import Herramientas4 from "./componentes/vistas/stepForm/Herramientas4";
import Herramientas5 from "./componentes/vistas/stepForm/Herramientas5";
import Referencias from "./componentes/vistas/stepForm/Referencias";
import CurriculumEdit from "./componentes/vistas/CurriculumEdit";
import NuevoDatos from "./componentes/vistas/Nuevo/NuevoDatos";
import NuevoObs from "./componentes/vistas/Nuevo/NuevoObs";
import NuevoExpEs from "./componentes/vistas/Nuevo/NuevoExpEs";
import NuevoExpG from "./componentes/vistas/Nuevo/NuevoExpG";
import NuevoEdu from "./componentes/vistas/Nuevo/NuevoEdu";
import NuEx2 from "./componentes/vistas/Nuevo/NuEx2";
import NuEx3 from "./componentes/vistas/Nuevo/NuEx3";
import NuEx4 from "./componentes/vistas/Nuevo/NuEx4";
import NuGe2 from "./componentes/vistas/Nuevo/NuGe2";
import NuGe3 from "./componentes/vistas/Nuevo/NuGe3";
import EditarExp from "./componentes/vistas/EditarExp";


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
                component={EditarDatosp}
              />

              <RutaAutenticada
                exact
                path="/editar/experiencia/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={EditarExp}

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
                path="/nuevo/educacion2/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Educacion2}
              />
              <RutaAutenticada
                exact
                path="/nuevo/educacion3/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Educacion3}
              />
               <RutaAutenticada
                exact
                path="/editar/idiomas/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Idiomas}
              />
              <RutaAutenticada
                exact
                path="/add/idiomas2/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Idiomas2}
              />
              <RutaAutenticada
                exact
                path="/add/idiomas3/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Idiomas3}
              />
              <RutaAutenticada
                exact
                path="/add/idiomas4/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Idiomas4}
              />
              <RutaAutenticada
                exact
                path="/add/idiomas5/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Idiomas5}
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
                path="/editar/herramientas2/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Herramientas2}
              />
              <RutaAutenticada
                exact
                path="/editar/herramientas3/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Herramientas3}
              />
              <RutaAutenticada
                exact
                path="/editar/herramientas4/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Herramientas4}
              />
              <RutaAutenticada
                exact
                path="/editar/herramientas5/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Herramientas5}
              />
               <RutaAutenticada
                exact
                path="/editar/cursos/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos}
              />
               <RutaAutenticada
                exact
                path="/add/cursos2/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos2}
              />
               <RutaAutenticada
                exact
                path="/add/cursos3/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos3}
              />
               <RutaAutenticada
                exact
                path="/add/cursos4/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos4}
              />
               <RutaAutenticada
                exact
                path="/add/cursos5/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos5}
              />
               <RutaAutenticada
                exact
                path="/add/cursos6/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos6}
              />
               <RutaAutenticada
                exact
                path="/add/cursos6/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos7}
              />
               <RutaAutenticada
                exact
                path="/add/cursos7/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos7}
              />
               <RutaAutenticada
                exact
                path="/add/cursos8/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos8}
              />
               <RutaAutenticada
                exact
                path="/add/cursos9/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos9}
              />
               <RutaAutenticada
                exact
                path="/add/cursos10/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Cursos10}
              />
            
              
                
             
                <RutaAutenticada
                exact
                path="/list"
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
                path="/nuevo/datos/"
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
                path="/nuevo/experienciae2/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuEx2}
              />
              <RutaAutenticada
                exact
                path="/nuevo/experienciae3/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuEx3}
              />
              <RutaAutenticada
                exact
                path="/nuevo/experienciae4/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuEx4}
              />
              <RutaAutenticada
                exact
                path="/nuevo/experienciag2/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuGe2}
              />
              <RutaAutenticada
                exact
                path="/nuevo/experienciag3/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuGe3}
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
                component={EditarResumen}
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

         {/* <Footer/>*/}
          </div>
        </MuiThemeProvider>
      </Router>

      
      
    </React.Fragment>
    
  ) : null;
}

export default App;
