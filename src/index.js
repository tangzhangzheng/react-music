import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import './index.css'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    ,
    document.getElementById('root')
);



