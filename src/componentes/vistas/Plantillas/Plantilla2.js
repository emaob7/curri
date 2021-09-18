import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import { Plantilla1 } from './Plantilla1';

class Plantilla2 extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <Plantilla1 ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
export default Plantilla2;