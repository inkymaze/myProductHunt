import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestSingleUser,
  requestUpdateUser } from '../../actions/user_actions';
import { requestUserProducts } from '../../actions/product_actions';
import { requestUpvote } from '../../actions/upvote_actions';
import { requestProduct } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => ({
  user:  state.users.byId[ownProps.match.params.userId],
  userId: ownProps.match.params.userId,
  loggedIn: Boolean(state.session.currentUser),
  products: state.products.byId,

  currentUserId: state.session.currentUser
                ? state.session.currentUser.id
                : null,
  upvotedByUser:(state.session.currentUser)
                ? state.session.currentUser.upvoted_products_ids
                : null,
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: (id) => dispatch(requestSingleUser(id)),
  requestUpdateUser: (user) => dispatch(requestUpdateUser(user)),
  requestProduct: (id) => dispatch(requestProduct(id)),
  requestUserProducts: userId => dispatch(requestUserProducts(userId)),
  requestUpvote: (upvote) => dispatch(requestUpvote(upvote))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
