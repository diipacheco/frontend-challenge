/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { Reducer } from 'redux';
import { produce } from 'immer';
import { FilmState, FilmsTypes } from '../types';

export const INITIAL_STATE: FilmState = {
  data: [],
  loading: false,
  error: null,
};

const reducer: Reducer<FilmState> = (state = INITIAL_STATE, action) => produce(
  state, (draft) => {
    switch (action.type) {
      case FilmsTypes.LOAD_SEARCH_REQUEST: {
        draft.loading = true;
        break;
      }
      case FilmsTypes.LOAD_SEARCH_SUCCESS: {
        draft.loading = false;
        draft.data = [{ ...action.payload.film }];
        break;
      }
      case FilmsTypes.LOAD_SEARCH_FAILURE: {
        draft.loading = false;
        draft.error = { ...action.payload.error };
        break;
      }

      default:
        break;
    }
  },
);

export default reducer;
