import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-146449395-1');
ReactGA.pageview('/homepage');
ReactDOM.render(<App />, document.getElementById('root'));
