import React from 'react';
import CommentListItem from './comment_list_item';
import CommentForm from './comment_form';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.renderComments = this.renderComments.bind(this);
    this.renderCommentForm = this.renderCommentForm.bind(this);
    this.renderSignupPrompt = this.renderSignupPrompt.bind(this);
  }

componentDidMount() {
  this.props.requestComments(this.props.productId);
}

renderComments() {
  let comments;
    comments = _.map(this.props.comments, comment => {
      return (
        <div className='comment-info' key={comment.id} >
          <CommentListItem comment={comment}/>
        </div>
      );
    });
  return comments;
}

renderCommentForm(){
  return (
    <CommentForm
      currentUserImg={this.props.currentUserImg}
      productId={this.props.productId}
      currentUserId={this.props.currentUserId}
      requestCreateComment={this.props.requestCreateComment}/>
  );
}

renderSignupPrompt() {
  return (
    <span className='signup-prompt-outer'>
      You need to become a Contributor to join the discussion -
      <Link to="/signup"
            className="signup-prompt-link"> Find out how</Link>
      .
    </span>
  );
}

  render () {
    let commentForm;
    if (this.props.currentUserId) {
      commentForm = this.renderCommentForm();
    } else {
      commentForm = this.renderSignupPrompt();
    }
    return (
      <div>
        <div className="comments-header">DISCUSSION</div>
        <div className="comment-section">
              {commentForm}
            <ul className='commens-list'>
              {this.renderComments()}
            </ul>
        </div>
      </div>
    );
  }
}

export default CommentSection;
