import React from 'react';
import CommentListItem from './comment_list_item';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.createComment = this.createComment.bind(this);
  }

  componentDidMount() {
    this.props.requestComments(this.props.productId)
  }



componentDidMount() {
  this.props.requestComments(this.props.productId);
}

createComment(e) {
  e.preventDefault();
  const newComment = {
    "body" : this.state.body,
    "hunter_id" : this.props.currentUserId,
    "product_id" : this.props.productId
  };
  this.props.requestCreateComment({newComment})
    .then(() => this.setState({body: ""}));
}

  render () {
    console.log('comment section props', this.props);
    let productComments;
    let commentForm;
    return (
      <div>
        <div className="comments-header">DISCUSSION</div>
        <section className="comment-section">
          <section>
            {productComments}
          </section>
          {commentForm}
        </section>
      </div>
    );
  }
}

export default CommentSection;
