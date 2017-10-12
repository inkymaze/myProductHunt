import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router';
import { requestQueryProducts } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  searchResults: state.searches.byId
});

const mapDispatchToProps = dispatch => ({
  requestQueryProducts: (query) => dispatch(requestQueryProducts(query)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
