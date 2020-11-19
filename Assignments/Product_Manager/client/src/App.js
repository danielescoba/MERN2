import React, {useState} from 'react';
import {Router} from '@reach/router';
import './App.css';
import AddProducts from './components/AddProduct'

function App() {
  return (
    <div >
      <h1>Produck Manager</h1>
      <div>
        <Router>
          <AddProducts path="/"/>
        </Router>
      </div>
    </div>
  );
}

export default App;
