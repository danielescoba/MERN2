import React, { useState } from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import NewTruck from './components/NewTruck';
import AllTruck from './components/AllTruck';
import EditTruck from './components/EditTruck';
import OneTruck from './components/OneTruck';

function App() {

  return (
    <div>
      <h1>Food Trucks</h1>
      <div>
        

          <Link  to="/"><button>Dashboard</button></Link>

          <Link to="truck/new" ><button>New Truck</button></Link>
        
      </div>
      <Router>
        <AllTruck path="/"/>
        <EditTruck path="/truck/:id/edit"/>
        <OneTruck path="/truck/:id"/>
        <NewTruck path="/truck/new"/>
      </Router>
    </div>
  );
}

export default App;
