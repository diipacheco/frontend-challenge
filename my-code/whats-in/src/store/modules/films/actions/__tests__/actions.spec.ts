import * as actions from '../index';
import { FilmsTypes } from '../../types';

import handleExpectedAction from '../../../../../utils/handleExpectedActions';

describe('action creators unit tests', () => {
  describe('search films actions', () => {
    it('should create a action to handle a films search', () => {
      expect.hasAssertions();

      const action = handleExpectedAction({
        type: FilmsTypes.LOAD_SEARCH_REQUEST,
        payload: {
          filmTitle: 'Spider-Man',
        },
      });

      expect(actions.handleLoadSearchRequest('Spider-Man')).toStrictEqual(action);
    });

    it('should create a action to handle a films search success', () => {
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

      const action = handleExpectedAction({
        type: FilmsTypes.LOAD_SEARCH_SUCCESS,
        payload: {
          film,
        },
      });

      expect(actions.handleLoadSearchSuccess(film)).toStrictEqual(action);
    });

    it('should create a action to handle a films search failure', () => {
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

      expect(actions.handleLoadSearchFailure(error)).toStrictEqual(action);
    });
  });
});
