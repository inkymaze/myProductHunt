import React from 'react';
import ProductListItem from '../product/product_list_item';

class UserProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pending: true };
  }

  componentDidMount() {
    this.props.requestUserProducts(this.props.userId)
      .then( () => this.setState({ pending: false }));
  }

  render () {
    console.log('user prof idx props', this.props);
    let userHuntedProducts = "";
    if (this.state.pending) {
      return (
        <div>loading....</div>
      );
    } else {
      userHuntedProducts =  this.props.allProductIds.map((productId, index) => {
      let product = this.props.allProducts[productId];

      return (
        <ProductListItem
          key={index}
          products={product}
          currentUserId={this.props.currentUserId}
          requestUpvote={this.props.requestUpvote}
          requestProduct={this.props.requestProduct}
          upvotedByUser={this.props.upvotedByUser}
          className="userProfileIndexItem"/>
      );
    });
      return (
        <section>
          { userHuntedProducts }
        </section>
      );
    }
  }
}


export default UserProfileIndex;
