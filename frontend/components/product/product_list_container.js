import { connect } from 'react-redux';
import ProductList from './product_list';
import {requestProducts, requestProduct } from '../../actions/product_actions';
import { requestUpvote } from '../../actions/upvote_actions';

const mapStateToProps = (state) => ({
  products: state.products,
  currentUserId: (state.session.currentUser)
                ? state.session.currentUser.id
                : null,
  upvotedByUser:(state.session.currentUser)
                ? state.session.currentUser.upvoted_products_ids
                : null,
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestProducts()),
  requestProduct: (id) => dispatch(requestProduct(id)),
  requestUpvote: (upvote) => dispatch(requestUpvote(upvote))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
