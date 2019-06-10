import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import LandingPage from './LandingPage';


ReactDOM.render(
    <Router>
     <LandingPage />
    </Router>,
     document.getElementById('root'));

