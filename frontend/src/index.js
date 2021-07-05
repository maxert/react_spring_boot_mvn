import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorker from './serviceWorker';
import {ReducerState} from "./reducer/reducerState";
import AlertTemplate from 'react-alert-template-basic'
import {AlertReducer} from "./reducer/reducer";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
const store = createStore(
    (AlertReducer),
    composeWithDevTools(applyMiddleware(logger))
);
const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}
const history = createBrowserHistory();
ReactDOM.render(
    <AlertProvider store={store} template={AlertTemplate} {...options}>
    <ReducerState>
        <Router history={history}>
        <App />
    </Router>

    </ReducerState>
    </AlertProvider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
