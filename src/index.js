import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust, faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add( fab, faAdjust, faGithub, faLinkedin, faFilePdf, faEnvelope)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
