import React from 'react';
import { NavBar, LoginContainer } from './components';
import { BrowserRouter as Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <LoginContainer />

      <div>
      <Route exact path='/' component={LoginContainer} />
      </div>
    </div>
  );
}

export default App;
