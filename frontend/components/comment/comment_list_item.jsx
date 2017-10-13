import React from 'react';


class CommentListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('comment list item', this.props);
    return (
      <h1>Comment list item</h1>
    );
  }
}
