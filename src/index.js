import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import reportWebVitals from './reportWebVitals';
import Layout from "./components/Layout";
import './index.scss';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Layout/>
    </ThemeProvider>,
    document.getElementById('root')
);
reportWebVitals();
