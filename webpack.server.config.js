const path = require('path');
const fs = require('fs');

module.exports = {
    entry: path.resolve(__dirname, './server.js'),
    output: {
        filename: 'server.bundle.js'
    },
    externals: fs.readdirSync(path.resolve(__dirname, './node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext
    }, {}),
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}