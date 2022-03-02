import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Hero from './Hero';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hero />, document.getElementById('body'));

