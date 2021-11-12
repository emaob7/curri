import React from 'react';


  export default class PapelClass extends React.Component {
    
    render() {
      return (
        <React.Fragment>
        {this.props.children}
        </React.Fragment>
      );
    }
  } 