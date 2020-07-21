/* eslint-disable no-unused-vars */
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { FilmState } from './modules/films/types';
import rootReducer from './modules/rootReducers';
import rootSaga from './modules/rootSagas';

export interface ApplicationState {
  films: FilmState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
