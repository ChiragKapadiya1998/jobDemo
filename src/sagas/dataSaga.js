import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {dataActionsCreator} from '../actions/dataAction';
import {getUserData} from '../services/api';

import {
  getAllUsersFail,
  getAllUsersRequest,
  getAllUsersSuccsess,
} from '../slice/dataSlice/slice';
import {store} from '../store/store';

function* getUserListSaga() {
  try {
    const response = yield call(getUserData);
    console.log('response::', response);
    yield store.dispatch(getAllUsersSuccsess(response));
  } catch (error) {
    yield store.dispatch(getAllUsersFail(error));
  }
}

export default function* () {
  yield takeLatest(getAllUsersRequest, getUserListSaga);
}
