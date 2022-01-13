import { Paper } from '@material-ui/core';
import React from 'react';


const style = {
  paper: {
    width: '850px',
      marginLeft: 'auto',
      marginRight: 'auto',
      minHeight: "1300px",
      backgroundColor: "white"
  },
}

  export default class PapelClass extends React.Component {
    
    render() {
      return (
        <React.Fragment>
          <div style={style.paper}>
        {this.props.children}
        </div>
        </React.Fragment>
      );
    }
  } 