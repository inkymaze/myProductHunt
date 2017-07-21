import { connect } from 'react-redux';
import ProductList from './product_list';
// import { selectAllProducts } from '../../reducers/selectors';
import requestProducts from '../../actions/product_actions';

const mapStateToProps = ({ products }) => ({
  products
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestProducts())
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
