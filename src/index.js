import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const wrapper = document.getElementById('App');
wrapper ? ReactDOM.render(<App />, wrapper) : console.error();;
