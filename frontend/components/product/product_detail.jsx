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
          <div className="product-show-info">
            <figure>
              <img src={products.image_url} alt={products.name} />
            </figure>
            <ul>
              <li className="product-show-name">{products.name}</li>
              <li className="product-show-desc">{products.desc}</li>
            </ul>
        </div>
        <div className="product-show-buttons">
          <a href={products.product_url}>
            <button className="getit-button" >GET IT</button>
          </a>
          <button className="upvote-button">
            <i class="fa fa-caret-up" aria-hidden="true"></i>Upvote
          </button>
            </div>
        </section>

    </div>
    );
  }
}

export default withRouter(ProductDetail);
