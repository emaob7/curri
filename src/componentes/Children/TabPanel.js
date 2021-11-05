import React from 'react';
import Box from '@mui/material/Box';

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <>{children}</>
          </Box>
        )}
      </div>
    );
  }