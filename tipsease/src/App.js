import React from 'react';
import { NavBar, LoginContainer, SignupContainer } from './components';
import WorkerListView from './views/WorkerListView';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div>
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/workers' component={WorkerListView} />
      </div>
    </div>
  );
}

export default App;
