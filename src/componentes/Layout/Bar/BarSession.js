import React, { Component } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
  Avatar,
  Typography,
} from "@material-ui/core";

import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import { consumerFirebase } from "../../../server";
import { compose } from "recompose";
import { StateContext } from "../../../sesion/store";
import { salirSesion } from "../../../sesion/actions/sesionAction";
import { MenuDerecha } from "./menuDerecha";
import { MenuIzquierdaU } from "./menuIzquierdaU";
import fotoUsuarioTemp from "../../../logo.svg";
import { withRouter } from "react-router-dom";
import boton from  "../../Imagenes/membrete/boton.png";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";


const style={
  logo: {
    width: "30px",
    height: "30px",
  },
  iconButton: {
    marginRight: "15px",
  },
  avatar: {
    marginLeft: "30px",
  },
  base: {
    width: "30px",
    height: "30px",
    borderRadius:"15px",
    marginRight: "25px",
    marginTop: 10,
    display: "flex",

  }
}

const styles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "15px",
    color: "#212121",
  },
  list: {
    width: 250,
  },
  
});

class BarSession extends Component {
  static contextType = StateContext;

  state = {
    firebase: null,
    right: false,
    left: false
  };

  

  salirSesionApp = () => {
    const { firebase } = this.state;
    const [{ sesion }, dispatch] = this.context;
    salirSesion(dispatch, firebase).then((success) => {
      this.props.history.push("/auth/login");
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    let nuevosObjetos = {};
    if (nextProps.firebase !== prevState.firebase) {
      nuevosObjetos.firebase = nextProps.firebase;
    }
    return nuevosObjetos;
  }


  
  render() {
    const { classes } = this.props;
    const [{ sesion }, dispatch] = this.context;
    const { usuario } = sesion;
    let textoUsuario = usuario.nombre + " " + usuario.apellido;

    return (
      <div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          anchor="left"
        >
          <div
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <MenuIzquierdaU
              classes={classes}

            ></MenuIzquierdaU>
          </div>
        </Drawer>

        <Drawer
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          anchor="right"
        >
          <div
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            <MenuDerecha
              classes={classes}
              usuario={usuario}
              textoUsuario={textoUsuario}
              fotoUsuario={usuario.foto || fotoUsuarioTemp}
              salirSesion={this.salirSesionApp}
            ></MenuDerecha>
          </div>
        </Drawer>
        <Toolbar>
        <Grid item xs={12} sm={5} md={5}>
          <Link  to="/">
          <Tooltip title="Ir a inicio">
            
           <img  src ={boton} style={style.logo} />
            
          
            </Tooltip>
            
            
           </Link>
           
            </Grid>

          <div className={classes.grow}></div>
          <div className={classes.sectionDesktop}>
            
          <Tooltip title="Sus Curriculums">
          <IconButton
          style={style.iconButton}
          color="inherit"
          component={Link} button to="/list"

            >
              <i className="material-icons"
              >dashboard</i>
            </IconButton>
            </Tooltip>

            <Tooltip title="Cuenta">
            <ButtonBase
            onClick={this.toggleDrawer("right", true)}
            style={style.base}
            >
            <Avatar
            style={style.avatar}
            src={usuario.foto || fotoUsuarioTemp}/>
            
            </ButtonBase>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              color="inherit"
              onClick={this.toggleDrawer("right", true)}
            >
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default compose(
  withRouter,
  consumerFirebase,
  withStyles(styles)
)(BarSession);