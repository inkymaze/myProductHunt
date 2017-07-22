import { connect } from 'react-redux';
import AddProductForm from './add_product_form';
import { createProduct } from '../../actions/product_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createProduct: product => dispatch(createProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);
