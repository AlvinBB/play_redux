const path = require('path');
const fs = require('fs');

module.exports = {
    entry: path.resolve(__dirname, '../server.js'),
    output: {
        filename: 'server.bundle.js'
    },
    //server端依赖包需要支持commonjs规范
    externals: fs.readdirSync(path.resolve(__dirname, '../node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext
    }, {}),
    //server端识别jsx文件
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