import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Map from './components/Map';
import Carpool from './components/Carpool';
import 'bootstrap/dist/css/bootstrap.min.css'



import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Home component */}
          <Route path="/" element={<Home/>} />
          {/* Route for the Map component */}
          <Route path="/map" element={<Map/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path='/carpool' element={<Carpool/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
