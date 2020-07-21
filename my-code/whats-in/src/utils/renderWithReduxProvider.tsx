/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';

import reducer, { INITIAL_STATE } from '../store/modules/films/reducer';
import { FilmState } from '../store/modules/films/types';

interface ObjectRenderParams {
  initialState?: FilmState
  store?: Store<FilmState, AnyAction>
}

function render(ui: React.ReactElement,
  {
    initialState = INITIAL_STATE,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: ObjectRenderParams = {}) {
  const Wrapper: React.FC = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
