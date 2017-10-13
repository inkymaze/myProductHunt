import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ProductListItem from './product_list_item';
import AddProductFormContainer from './add_product_form_container';



class ProductList extends React.Component {
  componentDidMount() {
    this.props.requestProducts();
  }

  render() {
    const { products } = this.props;

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
