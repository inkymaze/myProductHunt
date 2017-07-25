import React from 'react';
import { Link } from 'react-router-dom';

const ProductListItem = ({ products }) => (
  <Link to={`/products/${products.id}`}>
    <div className="products-list-item">
      <div className="product-img">
          <img src={products.image_url} alt={products.name} />
      </div>
      <div className="product-desc">
        <ul>
          <li className="product-name">{ products.name } </li>
          <li className="products-desc">{ products.desc } </li>
        </ul>
      </div>
    </div>
  </Link>
);

export default ProductListItem;
