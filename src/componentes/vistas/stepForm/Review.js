import React from "react";
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Papel from "../../Children/Papel";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    obje,
  nom,
  ape,
  prof,
  cin,
  nprof,
  naci,
  fena,
  dir,
  tel,
  email,
  nomref,
  telref,
  nomref1,
  telref1,
  } = formData;

  return (
    <Papel>
     
      <h3>Revisar para continuar</h3>
      <RenderAccordion summary="Datos Personales" go={ go } details={[
        { 'Nombre ': nom },
        { 'Apellidos ': ape },
        { 'Profesión ': prof },
        { 'CIN-DNI ': cin },
        { 'Profesional Número ': nprof },
        { 'Nacionalidad ': naci },
        { 'Fecha de Nacimiento ': fena },
        { 'Dirección ': dir },
        { 'Telefono ': tel },
        { 'Email ': email },
      ]} />
      <RenderAccordion summary="Objetivos" go={ go } details={[
        { 'Objetivos ': obje },

      ]} />
      <RenderAccordion summary="Referecia" go={ go } details={[
        { 'Nombre ': nomref },
        { 'Telefono ': telref },
        { 'Nombre ': nomref1 },
        { 'Telefono ': telref1 },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={() => go('submit')}
      >
        Guardar
      </Button>

    </Papel>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
