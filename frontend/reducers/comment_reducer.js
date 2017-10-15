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
      console.log('comment reducer ');
      console.log('state', state);
      console.log('action.comment', action.comment);
      console.log('action.comment.id', action.comment.id);
      newObj = merge({}, state);
      newObj.byId[action.comment.id] = action.comment;
      return newObj;

    case RECEIVE_COMMENT_ERRORS:
      console.log('receive comment errors reducer ');
      console.log('state', state);
      console.log('errors', action.errors);
      return merge({}, state, {errors: action.errors});

    default:
      return state;
  }
};

export default CommentReducer;
