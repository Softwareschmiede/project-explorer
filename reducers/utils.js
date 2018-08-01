import { SHOW_NEW_PROJECT_MODAL, HIDE_NEW_PROJECT_MODAL } from '../actions/utils';

export default function(state = false, action) {
  switch (action.type) {
    case SHOW_NEW_PROJECT_MODAL:
      return true;
    case HIDE_NEW_PROJECT_MODAL:
      return false;
    default:
      return state
  }
}