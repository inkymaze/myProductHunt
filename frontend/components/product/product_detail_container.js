import { connect } from 'react-redux';
import ProductDetail from './product_detail';
import { requestProduct } from '../../actions/product_actions';
import { requestSingleUser } from '../../actions/user_actions';
import { requestUpvote } from '../../actions/upvote_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  products: state.products.byId[ownProps.match.params.productId],
  currentUserId: (state.session.currentUser)
                ? state.session.currentUser.id
                : null,
  upvotedByUser:(state.session.currentUser)
                ? state.session.currentUser.upvoted_products_ids
                : null,
});

const mapDispatchToProps = dispatch => ({
  requestProduct: (id) => dispatch(requestProduct(id)),
  requestSingleUser: (id) => dispatch(requestSingleUser(id)),
  requestUpvote: (upvote) => dispatch(requestUpvote(upvote))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail));
