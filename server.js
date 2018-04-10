const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack/webpack.development.config');
const compiler = webpack(config);

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './client/src/routes';

import configureStore from './client/src/store/configureStore';

// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     hot: true,
//     status: { color: true }
// }));

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.send(500, error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const store = configureStore();
            res.send(200, renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>)
            );
        } else {
            res.send(404, 'Not found');
        }
    })
});

app.listen(3000, error => {
    if (error) {
        if (console) {
            console.error(error)
        }
    } else {
        if (console) {
            console.info(`==> �  Listening on port ${app.get('port')} . Open up http://localhost:${app.get('port')}/ in your browser.`)
        }
    }
});