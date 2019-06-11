import React from 'react';
import { NavBar, LoginContainer, SignupContainer } from './components';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div>
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      </div>
    </div>
  );
}

export default App;
