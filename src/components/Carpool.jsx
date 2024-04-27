import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Carpool() {
  const handleStartCarpool = () => {
    // Logic for starting a carpool
    alert('Starting a carpool...');
  };

  const handleFindCarpool = () => {
    // Logic for finding a carpool
    alert('Finding a carpool...');
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6}>
          <div className="carpool-container text-center">
            <h1>Carpool Page</h1>
            <div className="button-container">
              <button onClick={handleStartCarpool} className="btn btn-primary mx-2">Start a Carpool</button>
              <button onClick={handleFindCarpool} className="btn btn-secondary mx-2">Find a Carpool</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Carpool;
