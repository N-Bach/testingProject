import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as bookActions from './actions/bookActions';

import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();
store.dispatch(bookActions.fetchBook());
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router routes={routes} history={browserHistory} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
