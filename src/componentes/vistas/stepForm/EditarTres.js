import React from 'react';
import {useParams} from "react-router";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Papel from '../../Children/Papel';
import ExperienciaE1 from './ExperienciaE1';
import ExperienciaE2 from './ExperienciaE2';
import ExperienciaE3 from './ExperienciaE3';
import ExperienciaE4 from './ExperienciaE4';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

/*const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));*/

export default function ScrollableTabsButtonAuto() {

  const [value, setValue] = React.useState(0);
  const {id} = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} sm={8}>
    <Papel>
      
      
       <h1>Agrega tus experiencias especificas</h1>
       
      <h3>Sólo experiencias relacionadas al puesto, empieza con las más recientes</h3>
     
    
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="1 Experiencia E." {...a11yProps(0)} />
          <Tab label="2 Experiencia E." {...a11yProps(1)} />
          <Tab label="3 Experiencia E." {...a11yProps(2)} />
          <Tab label="4 Experiencia E." {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <ExperienciaE1 id ={id}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ExperienciaE2 id ={id}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ExperienciaE3 id ={id}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <ExperienciaE4 id ={id}/>
      </TabPanel>
     
    
    </Papel>
    </Grid>
    </Grid>
  );
}
