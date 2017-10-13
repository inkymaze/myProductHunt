import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});


export const requestComments = (productId) => dispatch => {
  return APIUtil.fetchComments(productId)
    .then((comments) => {
        return dispatch(receiveComments(comments));
      },
      errors => dispatch(receiveCommentErrors(errors))
    );
};

export const requestCreateComment = (comment) => dispatch => {
  return APIUtil.createComment(comment)
    .then((commentResponse) => {
        dispatch(receiveComment(commentResponse));
      },
      errors => dispatch(receiveCommentErrors(errors))
    );
};
