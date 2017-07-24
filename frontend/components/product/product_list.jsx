import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ProductListItem from './product_list_item';
import AddProductFormContainer from './add_product_form_container';
import ProductDetailContainer from './product_detail_container';


class ProductList extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.requestProducts();
  }

  render() {
    const { products } = this.props;

    return (

      <section className="productList">
        <ul>
          {products.allIds.map(id => <ProductListItem key='id' products={products.byId[id]} />)}

        </ul>


      </section>
    );
  }
}

export default ProductList;

// <Route exact path="/" component={AddProductFormContainer} />
// <Route path="/products/:productId" component={ProductDetailContainer} />
