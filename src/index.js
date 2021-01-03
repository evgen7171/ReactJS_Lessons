import React from 'react';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import App from "./App";

import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/es/integration/react'
import {createBrowserHistory} from "history";

import appStore from "./context/store";
import {BrowserRouter, Switch} from "react-router-dom";

export const history = createBrowserHistory();
export const {store, persistor} = appStore();

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <Switch>
                    <App/>
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
