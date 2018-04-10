/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _server = __webpack_require__(7);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = __webpack_require__(13);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(18);
var webpack = __webpack_require__(5);
var webpackDevMiddleware = __webpack_require__(19);

var app = express();
var config = __webpack_require__(20);
var compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     hot: true,
//     status: { color: true }
// }));

app.get('*', function (req, res) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.send(500, error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            console.log('renderProps', _reactRedux.Provider);
            res.send(200, (0, _server.renderToString)(_react2.default.createElement(
                _reactRedux.Provider,
                { store: (0, _configureStore2.default)({}) },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
            )));
        } else {
            res.send(404, 'Not found');
        }
    });
});

app.listen(3000, function (error) {
    if (error) {
        if (console) {
            console.error(error);
        }
    } else {
        if (console) {
            console.info('==> \uFFFD  Listening on port ' + app.get('port') + ' . Open up http://localhost:' + app.get('port') + '/ in your browser.');
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _RootContainer = __webpack_require__(9);

var _RootContainer2 = _interopRequireDefault(_RootContainer);

var _Error = __webpack_require__(12);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _RootContainer2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/', compoentn: _RootContainer2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _Error2.default })
);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _TopComponent = __webpack_require__(10);

var _TopComponent2 = _interopRequireDefault(_TopComponent);

var _testaction = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootContainer = function RootContainer(props) {
    return _react2.default.createElement(
        'div',
        null,
        'hello world!!!',
        _react2.default.createElement(_TopComponent2.default, props)
    );
};

var mapStateToProps = function mapStateToProps(state) {
    var todoApp = state.todoApp;
    var todoLists = todoApp.todoLists;

    return {
        todoLists: todoLists
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    addTodo: _testaction.addTodo
})(RootContainer);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopComponent = function TopComponent(_ref) {
    var todoLists = _ref.todoLists,
        addTodo = _ref.addTodo;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            null,
            todoLists.map(function (text, index) {
                return _react2.default.createElement(
                    'li',
                    { key: 'show' + index },
                    text
                );
            })
        ),
        _react2.default.createElement(
            'div',
            { onClick: addTodo.bind(undefined, Math.floor(100 * Math.random(0, 1))) },
            '\u70B9\u51FB\u6DFB\u52A0'
        )
    );
};

exports.default = TopComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;

var _ActionTypes = __webpack_require__(3);

function addTodo(text) {
    return { type: _ActionTypes.ADD_TODO, text: text };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(props) {
  return _react2.default.createElement(
    'div',
    null,
    'ERROR'
  );
};

exports.default = Error;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reducers = __webpack_require__(14);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(16);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger.createLogger)({
    level: 'info',
    logger: console,
    collapsed: true
});

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, logger)(_redux.createStore);

var configureStore = function configureStore(initialState) {
    var store = createStoreWithMiddleware(_reducers2.default, initialState);
    return store;
};

exports.default = configureStore;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _testData = __webpack_require__(15);

var _testData2 = _interopRequireDefault(_testData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    todoApp: _testData2.default
});

exports.default = rootReducer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = todoApp;

var _ActionTypes = __webpack_require__(3);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
    todoLists: []
};
function todoApp() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case types.ADD_TODO:
            return Object.assign({}, state, {
                todoLists: [].concat(_toConsumableArray(state.todoLists), [action.text])
            });
        default:
            return state;
    }
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(21);
var webpack = __webpack_require__(5);
var HtmlWebpackPlugin = __webpack_require__(22);
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './client.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
        }]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'client/public/index.html' }), new webpack.NamedModulesPlugin()]
    // devServer: {
    //     contentBase: '../dist',
    //     host: '127.0.0.1',
    //     hot: true,
    //     port: '8080',
    // }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ })
/******/ ]);