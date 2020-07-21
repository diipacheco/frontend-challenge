/* eslint-disable no-unused-vars */
import { runSaga } from 'redux-saga';
import { AnyAction } from 'redux';

import api from '../../../../../services/api';
import * as actions from '../../actions';
import { FilmsTypes } from '../../types';
import * as sagas from '../index';

describe('sagas integration tests', () => {
  describe('search feature sagas', () => {
    it('should call api and dispatch LOAD_SEARCH_SUCCESS action', async () => {
      expect.hasAssertions();

      const searchedFilm = {
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

      const response = {
        data: searchedFilm,
      };

      const requestFilm = jest.spyOn(api, 'get')
        .mockResolvedValue(response);

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      },
      sagas.handleLoadSearchAction, {
        type: FilmsTypes.LOAD_SEARCH_REQUEST,
        payload: {
          filmTitle: 'Spider-Man',
        },
      });

      expect(requestFilm).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadSearchSuccess(response.data)]);

      requestFilm.mockClear();
    });

    it('should call api and when throw a error, dispatch LOAD_SEARCH_FAILURE', async () => {
      expect.hasAssertions();

      const response = {
        data: {
          Response: 'False',
          Error: 'Movie not found!',
        },
      };

      const requestFilm = jest.spyOn(api, 'get')
        .mockResolvedValue(response);

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      }, sagas.handleLoadSearchAction, {
        type: FilmsTypes.LOAD_SEARCH_REQUEST,
        payload: {
          filmTitle: 'tatu bola',
        },
      });

      expect(requestFilm).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadSearchFailure(response.data)]);

      requestFilm.mockClear();
    });
  });
});
