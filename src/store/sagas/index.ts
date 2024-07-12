import { takeEvery } from 'redux-saga/effects';
import loginSaga from './login';
import { loginAction } from '../actions';

export function* rootSaga() {
    yield takeEvery(loginAction, loginSaga);
}