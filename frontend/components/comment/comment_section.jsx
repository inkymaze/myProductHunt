import React from 'react';
import CommentListItem from './comment_list_item';
import CommentForm from './comment_form';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount() {
  this.props.requestComments(this.props.productId);
}

  render () {
    let productComments;
    
    return (
      <div>
        <div className="comments-header">DISCUSSION</div>
        <section className="comment-section">
          <section>
            {productComments}
          </section>
          <CommentForm
            currentUserImg={this.props.currentUserImg}
            productId={this.props.productId}
            currentUserId={this.props.currentUserId}
            requestCreateComment={this.props.requestCreateComment}/>
        </section>
      </div>
    );
  }
}

export default CommentSection;
