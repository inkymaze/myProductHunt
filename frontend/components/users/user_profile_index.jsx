import React from 'react';
import ProductListItem from '../product/product_list_item';


class UserProfileIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestUserProducts(this.props.userId);
  }
}

export default UserProfileIndex;
