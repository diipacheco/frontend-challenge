/* eslint-disable no-unused-vars */
import { Reducer } from 'redux-testkit';

import handleExpectedAction from '../../../../../utils/handleExpectedActions';
import { FilmsTypes, FilmState } from '../../types';

import films from '../index';

describe('reducer unit tests', () => {
  describe('search feature', () => {
    it('should have a initial state', () => {
      expect.hasAssertions();

      const INITIAL_STATE: FilmState = {
        data: [],
        loading: false,
        error: null,
      };

      const action = handleExpectedAction({ type: '' });

      expect(films(INITIAL_STATE, action))
        .toStrictEqual({ data: [], loading: false, error: null });
    });

    it('should handle LOAD_SEARCH_REQUEST action on initial state', () => {
      expect.hasAssertions();

      const action = handleExpectedAction({ type: FilmsTypes.LOAD_SEARCH_REQUEST, payload: { filmTitle: 'Spider-man' } });

      const expectedState = { data: [], loading: false, error: null };

      const result = { data: [], loading: true, error: null };

      Reducer(films)
        .withState(expectedState)
        .expect(action)
        .toReturnState(result);
    });

    it('should handle LOAD_SEARCH_SUCCESS action on initial state', () => {
      expect.hasAssertions();

      const film = {
        Title: 'Spider-Man',
        Year: '2002',
        Rated: 'PG-13',
        Runtime: '121 min',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'Sam Raimi',
        Actors: 'Tobey Maguire, Willem Dafoe, Kirsten Dunst, James Franco',
        Plot: 'When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.3/10',
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '90%',
          },
          {
            Source: 'Metacritic',
            Value: '73/100',
          },
        ],
        imdbID: 'tt0145487',
      };

      const action = handleExpectedAction({ type: FilmsTypes.LOAD_SEARCH_SUCCESS, payload: { film } });

      const expectedState = { data: [], loading: true, error: null };

      const result = { data: [{ ...film }], loading: false, error: null };

      Reducer(films)
        .withState(expectedState)
        .expect(action)
        .toReturnState(result);
    });

    it('should handle LOAD_SEARCH_FAILURE action on initial state', () => {
      expect.hasAssertions();

      const error = {
        Response: 'False',
        Error: 'Movie not found!',
      };

      const action = handleExpectedAction({
        type: FilmsTypes.LOAD_SEARCH_FAILURE,
        payload: {
          error,
        },
      });

      const expectedState = { data: [], loading: true, error: null };

      const result = { data: [], loading: false, error };

      Reducer(films)
        .withState(expectedState)
        .expect(action)
        .toReturnState(result);
    });
  });
});
