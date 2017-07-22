import React from 'react';
import { Link } from 'react-router-dom';

const ProductListItem = ({ products }) => (
  <li className="products-list-item">
    <Link to={`/products/${products.id}`}>
      <span> { products.id } </span>
      <img src={products.image_url} alt={products.name} />
      <span> { products.name } </span>
    </Link>
  </li>
);

export default ProductListItem;
