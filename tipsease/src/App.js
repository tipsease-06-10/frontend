import React from 'react';
import { NavBar, LoginContainer, SignupContainer } from './components';
import { BrowserRouter as Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <LoginContainer />
      <SignupContainer />
      <div>
      <Route exact path='/' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      </div>
    </div>
  );
}

export default App;
