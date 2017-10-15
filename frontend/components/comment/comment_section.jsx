import React from 'react';
import CommentListItem from './comment_list_item';
import CommentForm from './comment_form';
import _ from 'lodash';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.renderComments = this.renderComments.bind(this);
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

  render () {
    return (
      <div>
        <div className="comments-header">DISCUSSION</div>
        <div className="comment-section">
          <CommentForm
            currentUserImg={this.props.currentUserImg}
            productId={this.props.productId}
            currentUserId={this.props.currentUserId}
            requestCreateComment={this.props.requestCreateComment}/>
            <ul className='commens-list'>
              {this.renderComments()}
            </ul>
        </div>
      </div>
    );
  }
}

export default CommentSection;
