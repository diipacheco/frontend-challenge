import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';

import Home from '../index';
import { handleLoadSearchRequest } from '../../../store/modules/films/actions/searchFilms.actions';
import * as useDebounce from '../../../hooks/useDebounce';

const mockStore = configureMockStore([]);

describe('home component', () => {
  it('should be able to search films and display then', () => {
    expect.hasAssertions();
    const dispatch = jest.fn();
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(dispatch);
    jest.spyOn(useDebounce, 'default').mockReturnValue('Spider-man');

    const applicationState = {
      films: {
        data: [],
        loading: false,
        error: null,
      },
    };

    const store = mockStore(applicationState);

    const { getByPlaceholderText } = render(
      <reactRedux.Provider store={store}>
        <Home />
      </reactRedux.Provider>,
    );

    const searchInputElement = getByPlaceholderText(/Search movies.../i);

    expect(searchInputElement).toBeInTheDocument();

    fireEvent.change(searchInputElement, { target: { value: 'Spider-man' } });

    expect(dispatch).toHaveBeenCalledWith(
      handleLoadSearchRequest('Spider-man'),
    );
  });
});
