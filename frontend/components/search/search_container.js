import { connect } from 'react-redux';
import Search from './search';
import { requestQueryProducts } from '../../actions/search_actions';

const mapStateToProps = (state, { match }) => ({

});

const mapDispatchToProps = dispatch => ({
  requestQueryProducts: (query) => dispatch(requestQueryProducts(query)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);
