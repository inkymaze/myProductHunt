import React from 'react';
import { Link } from 'react-router-dom';

class ProductListItem extends React.Component {

    constructor(props) {
      super(props);
      this.handleUpvote = this.handleUpvote.bind(this);
    }


    handleUpvote(e) {
      const { currentUserId, products, upvotedByUser } = this.props;
      e.preventDefault();
      console.log('product list item props', this.props);
      if (currentUserId) {
        if (!upvotedByUser.includes(products.id)) {
          const vote = {
          upvote: {
            hunter_id: currentUserId,
            product_id: products.id
          }
        };
          this.props.requestUpvote(vote);
        } else {
          alert("You can only vote once!");
        }
      } else {
        alert("Only logged in users can vote");
      }
    }
    render (){
      const { products } = this.props;

      return (
  <div>
    <Link to={`/products/${products.id}`}>
      <div className="products-list-item">
        <div className="product-img">
            <img src={products.image_url} alt={products.name} />
        </div>
        <div className="product-description">
          <ul>
            <li className="product-name">{ products.name } </li>
            <li className="products-description">{ products.description } </li>
          </ul>
        </div>
        <div className='product-idx-buttons'>
        <button className="upvote-button-idx"
                onClick={this.handleUpvote}>
          <img src="https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,co_rgb:4d6abf,e_blue:0,h_256/v1507835829/512px-Sort_up_font_awesome.svg_ykb2jq.png"
                className="upvote-caret"/>
              <div className='upvote-count'>{products.upvotes}</div>
        </button>
        <div className="comment-blurb"
              to={`/products/${products.id}`}>
              <i className="fa fa-comment"> </i>
        </div>
      </div>

      </div>


    </Link>
  </div>
);
}
}

export default ProductListItem;
