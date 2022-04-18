import React, { useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import AppNavBar from "./componentes/Layout/AppNavBar";
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
import NuevaPersona from "./componentes/vistas/NuevaPersona";
import CurriculumList from "./componentes/vistas/CurriculumList";
import CurriculumEdit from "./componentes/vistas/CurriculumEdit";
import Descargar from "./componentes/vistas/Plantillas/Descargar";
import Nuevo from "./componentes/vistas/checkout/Nuevo";
import Home from "./componentes/vistas/Home";



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
                component={Nuevo}
              />
               
               
            
            

              <RutaAutenticada
                exact
                path="/persona/nuevo"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={NuevaPersona}
              />
              <RutaAutenticada
                exact
                path="/"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Home}
              />
              <RutaAutenticada
                exact
                path="/descargar/:id"
                autenticadoFirebase="{firebase.auth.currentUser}"
                component={Descargar}
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
