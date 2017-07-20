import { connect } from 'react-redux';
import ProductList from './product_list';
import { selectAllProducts } from '../../reducers/selectors';


const mapStateToProps = state => ({
  products: selectAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
