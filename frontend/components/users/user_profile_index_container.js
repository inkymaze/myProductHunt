import { connect } from 'react-redux';
import UserProfileIndex from './user_profile_index';
import { requestProduct,
         requestUserProducts } from '../../actions/product_actions';
import { requestUpvote } from '../../actions/upvote_actions';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  allProducts: state.products.byId,
  userId: ownProps.userId,
  currentUserId: (state.session.currentUser)
                ? state.session.currentUser.id
                : null,
  errors: state.products.errors,
  allProductIds:  ownProps.allProductIds,
  upvotedByUser:(state.session.currentUser)
                ? state.session.currentUser.upvoted_products_ids
                : null,
});

const mapDispatchToProps = dispatch => ({
  requestUserProducts: userId => dispatch(requestUserProducts(userId)),
  requestProduct: id => dispatch(requestProduct(id)),
  requestUpvote: upvote => dispatch(requestUpvote(upvote))
});

const UserProfileIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileIndex);

export default UserProfileIndexContainer;
