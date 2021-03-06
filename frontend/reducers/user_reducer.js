import merge from 'lodash/merge';

import { RECEIVE_USER,
         RECEIVE_USER_ERRORS,
         CLEAR_USER_ERRORS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _defaultState = {
  byId: {},
  errors: []
};

const UserReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let byId = {}, userDetail, userId;

  switch(action.type) {
    case RECEIVE_USER:
      userId = action.user.id;
      return merge({}, state,
        { byId: { [userId]: action.user } });

    case RECEIVE_USER_ERRORS:
      return merge({}, state, {errors: action.errors});

    case CLEAR_USER_ERRORS:
      return merge({}, state, {errors: []});

      case RECEIVE_CURRENT_USER:
        if (action.user) {
          return merge({}, state,
            { byId: {[action.user.id]: action.user }});
        } else {
          return _defaultState;
        }

    default:
      return state;
  }
};

export default UserReducer;
