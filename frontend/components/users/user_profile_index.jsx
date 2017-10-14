import React from 'react';
import ProductListItem from '../product/product_list_item';

class UserProfileIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUserProducts(this.props.userId);
  }

  render () {
    console.log('user prof idx props', this.props);
    let userHuntedProducts = "";
    if (!userHuntedProducts) return null;
    userHuntedProducts =  this.props.allProductsIds.map((productId, index) => {

      let product = this.props.allProducts[productId];

      return (
        <ProductListItem
          key={index}
          products={product}
          currentUser={this.props.currentUser}
          requestUpvote={this.props.requestUpvote}
          requestProduct={this.props.requestProduct}
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


export default UserProfileIndex;
