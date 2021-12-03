import {
  LOGIN_SUCCESS
} from '../actions/user-actions-types';

const initialState = {
  userDetails: null
};


export default function user(state = initialState, {
  payload, type,
}) {
  switch (type) {

    case LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: payload
      };

    default:
      return state;
  }
}
