import merge from 'lodash/merge';

import { RECEIVE_COMMENTS,
         RECEIVE_COMMENT,
         RECEIVE_COMMENT_ERRORS
       } from '../actions/comment_actions';

const _defaultState ={
 byId: {},
 errors: []
};

const CommentReducer = (state = _defaultState, action) => {
 Object.freeze(state);
 let byId = {};
 let newObj = {};

 switch(action.type) {
    case RECEIVE_COMMENTS:
      newObj = _defaultState;
      action.comments.forEach(comment => {
        byId[comment.id] = comment;
      });
      return merge({}, newObj, { byId });

    case RECEIVE_COMMENT:
      newObj = merge({}, state);
      newObj.byId[action.comment.id] = action.comment;
      return newObj;

    case RECEIVE_COMMENT_ERRORS:
      return merge({}, state, {errors: action.errors});

    default:
      return state;
  }
};

export default CommentReducer;
