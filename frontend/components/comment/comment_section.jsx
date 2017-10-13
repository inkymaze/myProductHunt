import React from 'react';
import { withRouter } from 'react-router-dom';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestComments(this.props.productId)
  }

  render () {
    console.log('comment section props', this.props);
    return (
      <div>Comment Section</div>
    );
  }
}

export default withRouter(CommentSection);
