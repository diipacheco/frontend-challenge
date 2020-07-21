import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import api from '../../../../services/api';
import * as actions from '../actions';
import { FilmsTypes } from '../types';

export function* handleLoadSearchAction({ payload }: ReturnType<typeof actions.handleLoadSearchRequest>) {
  const response = yield call(api.get, `/?apikey=5c290bd2&t=${payload.filmTitle}`);
  if (response.data.Error) {
    yield put(actions.handleLoadSearchFailure(response.data));
  } else {
    yield put(actions.handleLoadSearchSuccess(response.data));
  }
}

export function* handleLoadRequestAction() {
  return yield null;
}

export default all([
  takeLatest(FilmsTypes.LOAD_SEARCH_REQUEST, handleLoadSearchAction),
]);
