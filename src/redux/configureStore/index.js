import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  level: 'info',
  logger: console,
  collapsed: true
});
const createStoreWithMiddleware = process.env.NODE_ENV === 'development' ? applyMiddleware(
  thunk, logger
)(createStore) : applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}
