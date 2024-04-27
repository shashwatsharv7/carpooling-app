import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6}>
    <div className="home-container text-center">
      <h1>Welcome to Carpool App</h1>
      <div className="options">
        {/* Button for Login/Signup */}
        <button onClick={() => handleNavigate('/Login')}>Login</button>
        {/* Button for Carpool */}
        <button onClick={() => handleNavigate('/carpool')}>Carpool</button>
        {/* Button for Maps */}
        <button onClick={() => handleNavigate('/map')}>Map</button>
      </div>
    </container>
    </div>
  );

export default Home;
