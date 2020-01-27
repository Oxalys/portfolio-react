import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.scss';
import './style.sass';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
