import React from 'react';

const CommentListItem = ({comment}) => {
  return (
    <div>
      <div className="commentAuthorInfo">
        <img src={comment.user.image_url}
              className='commentAuthorImg'
              />
            @{comment.user.username}
      </div>
      <div className="comment-text">
        {comment.body}
      </div>
    </div>
  );
};

export default CommentListItem;
