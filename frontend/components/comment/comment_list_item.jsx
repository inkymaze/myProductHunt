import React from 'react';


class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: ""};
    this.createComment = this.createComment.bind(this);
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

  render() {
    console.log('comment list item', this.props);
    return (
      <h1>Comment list item</h1>
    );
  }
}
