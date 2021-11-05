import React, { useState } from 'react';
import { consumerFirebase } from "../../../server";
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from "uuid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InDatos from '../Sections/InDatos';
import InPerfil from '../Sections/InPerfil';
import InEspecificaDos from '../Sections/InEspecificaDos';
import InEspecifica from '../Sections/InEspecifica';
import InEducacion from '../Sections/InEducacion';
import InCursos from '../Sections/InCursos';
import Papel from '../../Children/Papel';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
 
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  
}));
 


const Nuevo =(props)=> {
  const firebase = props.firebase;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [datos, setDatos] = useState([{perfil: "",nombre: "",ape: "",cin: "",fena: "",prof: "",nprof: "",naci: "",dir: "",tel: "",email: ""}]);
  const [expe, setExpe] = useState([{empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""}]);
  const [gene, setGene] = useState([{empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""}]);
  const [educa, setEduca] = useState([{titu: "", insti: "",duracion: "", culminacion: "" }]);
  const [cursos, setCursos] = useState([{titu: "", insti: "",duracion: "", culminacion: "" }]);
  const id = uuidv4();
  const propi = ({propietario:firebase.auth.currentUser.uid});

  const handleNext = () => {
    setActiveStep(activeStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  
const guardarDatos = async () => {
 // datos.propietario = props.firebase.auth.currentUser.uid;
  await firebase.db.collection("Datosps")
  .doc(id)
  .set((Object.assign({}, {datos})),{merge: true})
  guardarExpe();
  guardarGene();
  guardarEduca();
  guardarCursos();
  guardarPropi();
 props.history.push("/curriculum/edit/" + id);

}

const guardarPropi = async () => {
  await firebase.db.collection("Datosps")
  .doc(id)
  .set(propi, {merge: true})
  }
const guardarExpe = async () => {
await firebase.db.collection("Datosps")
.doc(id)
.set((Object.assign({}, {expe})),{merge: true})

}
const guardarGene = async () => {
await firebase.db.collection("Datosps")
.doc(id)
.set((Object.assign({}, {gene})),{merge: true})

}
const guardarEduca = async () => {
await firebase.db.collection("Datosps")
.doc(id)
.set((Object.assign({}, {educa})),{merge: true})

}
const guardarCursos = async () => {
await firebase.db.collection("Datosps")
.doc(id)
.set((Object.assign({}, {cursos})),{merge: true})

}





  const steps = ['Información Personal', 'Perfil', 'Experiencias Específicas','Experiencias Generales','Educación', 'Cursos con certificados' ];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <InDatos 
        datos={datos}
        change ={change}
        />;
        
      case 1:
        
        return <InPerfil 
        datos={datos}
        change ={change}/>;
      case 2:
        return <InEspecificaDos
        expe={expe}
        handleInputChange={handleInputChange}
        handleRemoveClick={handleRemoveClick}
        handleAddClick={handleAddClick}
        />
      ;
      case 3:
        return  <InEspecifica
        gene={gene}
        handleInputChangeg={handleInputChangeg}
        handleRemoveClickg={handleRemoveClickg}
        handleAddClickg={handleAddClickg}
        /> 
        ;
      case 4:
        return <InEducacion
        educa={educa}
        handleInputChangeE={handleInputChangeE}
        handleRemoveClickE={handleRemoveClickE}
        handleAddClickE={handleAddClickE}
       />
        ;
      case 5:
        return <InCursos
        cursos={cursos}
        handleInputChangeC={handleInputChangeC}
        handleRemoveClickC={handleRemoveClickC}
        handleAddClickC={handleAddClickC}
       />
        ;
      default:
        throw new Error('Unknown step');
    }
  }




  const change = (e, index) => {
    
    const { name, value } = e.target;
    const list = [...datos];
    list[index][name] = value;
    setDatos(list);
  };
  
  
    const handleInputChange = (e, index) => {
      
        const { name, value } = e.target;
        const list = [...expe];
        list[index][name] = value;
        setExpe(list);
      };
    
      // handle click event of the Remove button
      const handleRemoveClick = index => {
        
        const list = [...expe];
        list.splice(index, 1);
        setExpe(list);
      };
    
      // handle click event of the Add button
      const handleAddClick = () => {
        setExpe([...expe, { empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: "" }]);
      };
  
      //Generales
  
      const handleInputChangeg = (e, index) => {
        
        const { name, value } = e.target;
        const list = [...gene];
        list[index][name] = value;
        setGene(list);
      };
    
      // handle click event of the Remove button
      const handleRemoveClickg = index => {
       
        const list = [...gene];
        list.splice(index, 1);
        setGene(list);
      };
    
      // handle click event of the Add button
      const handleAddClickg = () => {
        setGene([...gene, { empre: "", ffinal: "",finicio: "", tareas: "",puesto: "", ubicacion: ""  }]);
      };
  
      //Educacion
      const handleInputChangeE = (e, index) => {
        
        const { name, value } = e.target;
        const list = [...educa];
        list[index][name] = value;
        setEduca(list);
      };
      // handle click event of the Remove button
      const handleRemoveClickE = index => {
        
        const list = [...educa];
        list.splice(index, 1);
        setEduca(list);
      };
      // handle click event of the Add button
      const handleAddClickE = () => {
        setEduca([...educa, { titu: "", insti: "",duracion: "", culminacion: "" }]);
      };
  
      //Cursos
      const handleInputChangeC = (e, index) => {
        
        const { name, value } = e.target;
        const list = [...cursos];
        list[index][name] = value;
        setCursos(list);
      };
      // handle click event of the Remove button
      const handleRemoveClickC = index => {
        
        const list = [...cursos];
        list.splice(index, 1);
        setCursos(list);
      };
      // handle click event of the Add button
      const handleAddClickC = () => {
        setCursos([...cursos, { titu: "", insti: "",duracion: "", culminacion: "" }]);
      };
  
  

  

  

  


  return (
    <React.Fragment>
      <CssBaseline />
              
              
      
     
    <Papel>
        
          <Typography component="h1" variant="h4" align="center">
            Nuevo Curriculum
          </Typography>
          <Hidden mdDown>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          </Hidden>
          <Hidden smUp>
          <Typography variant="h6" gutterBottom>{steps[activeStep]}</Typography>
          </Hidden>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
                <div className={classes.buttons}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={guardarDatos}
                    className={classes.button}
                  >
                   Guardar Datos
                  </Button>
                  </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Atrás
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Visualizar Datos' : 'Next'}
                  </Button>
                </div>
                
              </React.Fragment>
            )}
           
          </React.Fragment>
        </Papel>
        
      

    </React.Fragment>

  );
}
export default consumerFirebase(Nuevo);