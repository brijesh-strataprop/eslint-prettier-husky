import { all, call, select, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN,
  loginFailure,
  loginRequested,
  loginSuccess,
} from '../actions/user-actions-types';


export function* login({ payload: data }) {
  console.log("user logged in")
}


function* User() {
  yield all([
    takeLatest(LOGIN, login),
  ]);
}

export default User;