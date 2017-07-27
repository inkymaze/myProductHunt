import { connect } from 'react-redux';
import AddProductForm from './add_product_form';
import { requestCreateProduct, clearProductErrors } from '../../actions/product_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser.id,
  errors: state.products.errors
});

const mapDispatchToProps = dispatch => {
  return {requestCreateProduct: product => dispatch(requestCreateProduct(product)),
    clearProductErrors: () => dispatch(clearProductErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);
