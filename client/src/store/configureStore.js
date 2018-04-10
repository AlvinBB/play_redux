import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    level: 'info',
    logger: console,
    collapsed: true
})

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

const configureStore = (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}

export default configureStore;