import { all } from 'redux-saga/effects';

import films from './films/sagas';

export default function* rootSaga() {
  return yield all([films]);
}
