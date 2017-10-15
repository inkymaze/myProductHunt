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
    _.map(this.props.comments, comment => {
      console.log('each rendered comment', comment);
      return (
        <li className='comment-info' key={comment.id} >
          <CommentListItem
            comment={comment}
            />
        </li>
      );
    });
}

  render () {

    console.log('comment section props', this.props.comments.byId);
    return (
      <div>
        <div className="comments-header">DISCUSSION</div>
        <div className="comment-section">
          <ul className='comments-list'>
            {this.renderComments}
          </ul>
          <CommentForm
            currentUserImg={this.props.currentUserImg}
            productId={this.props.productId}
            currentUserId={this.props.currentUserId}
            requestCreateComment={this.props.requestCreateComment}/>
        </div>
      </div>
    );
  }
}

export default CommentSection;
