import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ProductListItem from './product_list_item';
import AddProductFormContainer from './add_product_form_container';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: true
    };
  }
  componentDidMount() {
    this.props.requestProducts()
      .then(() => this.setState({pending: false}));
  }

  render() {
    const { products } = this.props;
    if (this.state.pending) {
      return (<div className="loading-message">Hunting down results...</div>);
    } else if (products.allIds.length === 0) {
      return (
        <div className="search-fail-outer-cont">
          <div className="emoji-sad">😥</div>
          <div className="search-fail">Bummer! No results.</div>
        </div>
      );
    }
    return (
      <section className="product-section">
        <div className="allproducts">
          <ul>
            {products.allIds.map(id => <li key={id}>
              <ProductListItem
                key={id}
                products={products.byId[id]}
                requestUpvote={this.props.requestUpvote}
                currentUserId={this.props.currentUserId}
                upvotedByUser={this.props.upvotedByUser}
              /></li>)}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductList;
