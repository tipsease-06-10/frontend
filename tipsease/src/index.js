import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import rootReducer from '../src/store/reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
         <App />
        </Router>
    </Provider>,
     document.getElementById('root')
     );

