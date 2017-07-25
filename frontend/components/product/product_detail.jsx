import React from 'react';
import { Route, withRouter } from 'react-router-dom';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.productId !== nextProps.match.params.productId)
     {
      this.props.requestProduct(nextProps.match.params.productId);
    }
  }

  render() {
    const { products } = this.props;

    if (!products) return null;

    return (
      <div className="product-show">
        <section className="product-detail">
        <figure>
          <img src={products.image_url} alt={products.name} />
        </figure>
        <ul>
          <li className="product-show-name">{products.name}</li>
          <li className="product-show-desc">{products.desc}</li>
        </ul>

        <a href={products.product_url}>
          <button className="getit-button" >GET IT</button>
        </a>
      </section>
    </div>
    );
  }
}

export default withRouter(ProductDetail);
