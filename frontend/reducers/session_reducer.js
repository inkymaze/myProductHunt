import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

import { CREATE_UPVOTE } from '../actions/upvote_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let upVotes = [];

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_ERRORS:
      return merge({}, state, { errors: [] });
    case CREATE_UPVOTE:
      upVotes = state.currentUser.upvoted_products_ids;
      upVotes.push(action.upvote.productId);
      return merge({}, state, { currentUser: { upvoted_products_ids: upVotes}});
    default:
      return state;
  }
};

export default SessionReducer;
