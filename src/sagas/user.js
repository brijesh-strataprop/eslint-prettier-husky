import { all, takeLatest } from 'redux-saga/effects';
import {
  LOGIN,
} from '../actions/user-actions-types';
import { navigate } from '../config/navigator';


export function* login({ payload: data }) {
  console.log("user logged in")
  navigate('Home')
}

function* User() {
  yield all([
    takeLatest(LOGIN, login),
  ]);
}

export default User;