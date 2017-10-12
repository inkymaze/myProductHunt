import * as APIUtil from '../util/upvote_api_util';

export const CREATE_UPVOTE = "CREATE_UPVOTE";

export const receiveUpvote = upvote => ({
  type: CREATE_UPVOTE,
  upvote
});

export const requestUpvote = upvote => dispatch => {
  return APIUtil.createUpvote(upvote)
    .then(upvoteResponse => {
        dispatch(receiveUpvote(upvoteResponse));
  });
};
