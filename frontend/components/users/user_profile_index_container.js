import { connect } from 'react-redux';
import UserProfileIndex from './user_profile_index';
import { requestProduct,
         requestUserProducts } from '../../actions/product_actions';


const mapStateToProps = (state, ownProps) => ({
  products: state.products.byId,
  currentUser: (state.session.currentUser) ? state.session.currentUser.id : null,
  errors: state.products.errors,
  loggedIn: Boolean(state.session.currentUser),
  userId: ownProps.userId,
  allIds: ownProps.allIds
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
