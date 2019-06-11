import React from 'react';
import { LoginContainer } from './components';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div>
      <Route path='/login' component={LoginContainer} />
      </div>
    </div>
    
  );
}

export default App;
