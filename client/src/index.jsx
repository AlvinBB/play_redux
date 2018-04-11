import React from 'react';
import ReactDOM from 'react-dom';

// import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, broswerHistory } from 'react-router';

import routes from './routes';
import '../styles/index.scss';

const store = configureStore(window.__INITIAL_STATE__);

const render = () => {
    let provider = (
        <Provider store={store}>
            <Router 
                history={broswerHistory}
                routes={routes}
            />
        </Provider>
    );
    ReactDOM.render(
        provider,
        document.getElementById('root')
    );
};

render();

if (module.hot) {
    module.hot.accept('./containers/RootContainer', () => {
        render();
    });
}
