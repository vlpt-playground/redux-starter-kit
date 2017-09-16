import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const customizedPromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
});


const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware));

export default store;