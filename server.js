const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const config = require('./webpack/webpack.development.config');
const compiler = webpack(config);

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './client/src/routes';

import configureStore from './client/src/store/configureStore';
import { renderFullPage } from './configration/template';



app.set('port', process.env.NODE_PORT || 3000);

//allow application/json
app.use(bodyParser.json());
console.log('__dirname', __dirname)
console.log('path', path.join(__dirname, 'public'))
//static source file, do not have catch now
app.use('/static', express.static(path.join(__dirname, 'public'), {
    "extensions": ["css", "js"],
    "index": false
}));

// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     hot: true,
//     status: { color: true }
// }));

//send res here
app.get('*', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const store = configureStore();
            const preloadState = store.getState();
            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>);
            res.type('html').send(renderFullPage(html, preloadState));
        } else {
            res.status(404).send('Not found');
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