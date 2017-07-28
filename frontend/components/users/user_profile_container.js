import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestSingleUser,
  requestUpdateUser } from '../../actions/user_actions';
import { requestUserProducts } from '../../actions/product_actions';



const mapStateToProps = (state, ownProps) => ({
  user:  state.users.byId[ownProps.match.params.userId],
  userId: ownProps.match.params.userId
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: (id) => dispatch(requestSingleUser(id)),
  requestUpdateUser: (user) => dispatch(requestUpdateUser(user)),
  requestUserProducts: userId => dispatch(requestUserProducts(userId))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
