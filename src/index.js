import React from 'react';
import ReactDOM from 'react-dom';

// Required for Redux store setup
import { Provider } from 'react-redux';
import configureStore from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/dist/css/react-widgets.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
