import { connect } from 'react-redux';
import ProductDetail from './product_detail';
import { requestProduct } from '../../actions/product_actions';
import { requestSingleUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  products: state.products.byId[ownProps.match.params.productId],
  currentUser: (state.session.currentUser) ? state.session.currentUser.id : null,
});

const mapDispatchToProps = dispatch => ({
  requestProduct: (id) => dispatch(requestProduct(id)),
  requestSingleUser: (id) => dispatch(requestSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
