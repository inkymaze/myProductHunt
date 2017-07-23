import { connect } from 'react-redux';
import AddProductForm from './add_product_form';
import { requestCreateProduct } from '../../actions/product_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser.id,
  errors: state.products.errors
});

const mapDispatchToProps = dispatch => ({
  requestCreateProduct: product => dispatch(requestCreateProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);
