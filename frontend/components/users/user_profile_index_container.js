import { connect } from 'react-redux';
import UserProfileIndex from './user_profile_index';
import { requestProduct,
         requestUserProducts } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => ({
  allProducts: state.products.byId,
  loggedIn: Boolean(state.session.currentUser),
  userId: ownProps.userId,
  currentUser: (state.session.currentUser) ? state.session.currentUser.id : null,
  errors: state.products.errors,
  allProductIds: ownProps.allProductIds
});

const mapDispatchToProps = dispatch => ({
  requestUserProducts: userId => dispatch(requestUserProducts(userId)),
  requestProduct: id => dispatch(requestProduct(id)),
});

const UserProfileIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileIndex);

export default UserProfileIndexContainer;
