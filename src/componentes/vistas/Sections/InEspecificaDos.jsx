import React, { useState } from "react";

function InEspecificaDos(props) {
    const { expe,handleInputChange,handleRemoveClick,handleAddClick, ...other } = props; 
    

 



  // handle input change
 

  return (
    <div className="App">
      <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
      {expe.map((x, i) => {
        return (
          <div className="box">
            <input
              name="firstName"
              placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {expe.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {expe.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(expe)}</div>
    </div>
  );
}

export default InEspecificaDos;
