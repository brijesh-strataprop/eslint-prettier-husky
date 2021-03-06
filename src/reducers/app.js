import { HIDE_LOADER, SHOW_LOADER, } from '../actions/app-action-types';

const initialState = {
  visible: false,

};

export default function app(state = initialState, { type }) {
  switch (type) {
    case HIDE_LOADER:
      return { visible: false };

    case SHOW_LOADER:
      return { visible: true };

    default:
      return state;
  }
}
