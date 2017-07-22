import React from 'react';
import { Route } from 'react-router-dom';
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

      <section className="productList">
        <ul>
          {products.map(product => <ProductListItem key={product.id} products={product} />)}
        </ul>

        <Route exact path="/" component={AddProductFormContainer} />
        <Route path="/product/:productId" component={ProductDetailContainer} />
      </section>
    );
  }
}

export default ProductList;
