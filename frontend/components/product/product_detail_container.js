import { connect } from 'react-redux';
import ProductDetail from './product_detail';
import { requestProduct } from '../../actions/product_actions';

const mapStateToProps = ({ products }) => ({
  products: products.byId[products.currentProduct],

});

const mapDispatchToProps = dispatch => ({
  requestProduct: id => dispatch(requestProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
