import { connect } from 'react-redux';
import UserProfileIndex from './user_profile_index';
import { requestProduct,
         requestUserProducts } from '../../actions/product_actions';
import { requestUpvote } from '../../actions/upvote_actions';


const mapStateToProps = (state, ownProps) => ({
  allProducts: state.search.query.length === 0 ? state.products.byId : state.search.byId,
  loggedIn: Boolean(state.session.currentUser),
  userId: ownProps.userId,
  currentUserId: (state.session.currentUser)
                ? state.session.currentUser.id
                : null,
  errors: state.products.errors,
  allProductIds:  state.search.query.length === 0 ? state.products.allIds : state.search.allIds,
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
