// core
import React from 'react';
import ReactDOM from 'react-dom';

// library
import {initialize} from '../library/bootstrap';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import {modules as clientModules} from './modules';

// components + css
import {Root} from './Root';
import './app.css';

const store = initialize(clientModules, [createLogger()]);

ReactDOM.render(
   <Provider store={store}>
    <Root/>
   </Provider>,
    document.getElementById('root')
);
