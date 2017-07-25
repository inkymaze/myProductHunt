import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ProductListItem from './product_list_item';
import AddProductFormContainer from './add_product_form_container';
import ProductDetailContainer from './product_detail_container';


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
            {products.allIds.map(id => <li key={id}><ProductListItem key={id}
              products={products.byId[id]} /></li>)}
          </ul>
      </div>

      <Route path="/products/:productId" component={ProductDetailContainer} />
      </section>
    );
  }
}

export default ProductList;
