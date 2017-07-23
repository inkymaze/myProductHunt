
import React from 'react';
import { Route } from 'react-router-dom';


class ProductDetail extends React.Component {

  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.productId !== nextProps.match.params.productId) {
      this.props.requestProduct(nextProps.match.params.productId);
    }
  }

  render() {
    const { products } = this.props;


    if (!products) return null;

    return (
      <section className="product-detail">
        <figure>
          <img src={products.image_url} alt={products.name} />
        </figure>
        <ul>
          <li>
            <h2>{products.name}</h2>
          </li>
          <li>Description: {products.desc}</li>
        </ul>
      </section>
    );
  }
}

export default ProductDetail;
