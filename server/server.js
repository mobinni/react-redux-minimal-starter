import express from 'express';
import path from 'path';
import {renderToStaticMarkup} from 'react-dom/server';
import React from 'react';
import register from 'ignore-styles'

register(['.css'])

const app = express();

if (process.env.DEVELOPMENT) {
    const webpackMiddleware = require('webpack-dev-middleware'),
        webpack = require('webpack'),
        hotReload = require('webpack-dev-middleware'),
        decache = require('decache');

    const config = require(path.join('..', 'webpack.config.js')),
        compiler = webpack(config);
    app.use(webpackMiddleware(compiler,
        {
            noInfo: false,
            quiet: false,
            lazy: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: true
            },
            publicPath: '/assets/',
            index: 'index.html',
            headers: {'X-Custom-Header': 'yes'},
            stats: {
                colors: true
            },
            reporter: null,
            serverSideRender: false,
        })
    );
    app.use(hotReload(compiler));
    decache('../src/Root')
}

app.get('/', (req, res) => {
    const {Root} = require('../src/Root');
    res.send(
        renderToStaticMarkup(<Root/>)
    );
});

export function start() {
    app.listen(8000, () => console.log('tmp server started'));
}
