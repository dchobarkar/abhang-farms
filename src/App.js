import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
