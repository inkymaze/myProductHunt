// import React from 'react';
// import ProductListItem from '../product/product_list_item';
// import UserProfileIndexContainer from './user_profile_index_container';
//
//
// class UserProfileIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { pending: true };
//
//   }
//
//   componentDidMount() {
//     this.props.requestUserProducts(this.props.userId)
//       .then( () => this.setState({ pending: false }));
//   }
//
//   render () {
//     console.log('user prof idx props', this.props);
//     let orderedProducts = "";
//     orderedProducts =  this.props.allProductsIds.map((productId, index) => {
//
//       let product = this.props.allProducts[productId];
//
//       return (
//         <ProductListItem
//           key={index}
//           products={product}
//           loggedIn={this.props.loggedIn}
//           currentUser={this.props.currentUser}
//           requestProduct={this.props.requestProduct}
//           className="userProfileIndexItem"/>
//       );
//     });
//
//     return (
//       <section>
//         { orderedProducts }
//       </section>
//     );
//   }

// }
//
//
// export default UserProfileIndex;
