import React from 'react';
import ProductListItem from '../product/product_list_item';
import UserProfileIndexContainer from './user_profile_index_container';


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
    // const { users } = this.props;
    // let userProducts = (<UserProfileIndexContainer products={users.products}
    //    userId={users.id}/>);
    //
    //
    // return (
    //
    //   { userProducts }
    // );
    let orderedProducts = "";

    orderedProducts =  this.props.allIds.map((product_id, index) => {
      let products = this.props.products[product_id];

      return (
        <ProductListItem
          key={index}
          products={products}
          loggedIn={this.props.loggedIn}
          currentUser={this.props.currentUser}
          requestProduct={this.props.requestProduct}
          className="userProfileIndexItem"/>
      );
    });


return (
  <section>
    { orderedProducts }
  </section>
);
  }

}


export default UserProfileIndex;
