import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';

const logger = createLogger({
  collapsed: true
});

export const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);
