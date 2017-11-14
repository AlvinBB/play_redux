/* global document */

// import 'babel-polyfill';
// import 'isomorphic-fetch';
// import OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import './styles/main.scss';
import RootContainer from './containers/RootContainer.jsx';
import configureStore from './redux/configureStore';

// OfflinePluginRuntime.install();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

render(RootContainer);

if (module.hot) {
  module.hot.accept('./containers/RootContainer.jsx', () => {
    render(RootContainer);
  });
}
