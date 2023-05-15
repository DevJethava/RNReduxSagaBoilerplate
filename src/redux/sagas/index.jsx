import { all } from 'redux-saga/effects';

import homeSaga from './homeSaga';

function* rootSaga() {
  yield all([homeSaga()]);
}

export default rootSaga;
