import { connect } from 'react-redux';
import ProductList from './product_list';
// import { selectAllProducts } from '../../reducers/selectors';
import {requestProducts, requestProduct } from '../../actions/product_actions';

const mapStateToProps = ({ products }) => ({
  products
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestProducts()),
  requestProduct: (id) => dispatch(requestProduct(id))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
