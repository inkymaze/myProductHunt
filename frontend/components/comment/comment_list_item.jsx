import React from 'react';
import { Link } from 'react-router-dom';


class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: ""};
  }
  

  render() {
    console.log('comment list item', this.props);
    return (
      <h1>Comment list item</h1>
    );
  }
}
