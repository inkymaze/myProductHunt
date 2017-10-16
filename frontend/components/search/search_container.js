import { connect } from 'react-redux';
import Search from './search';
import { requestQueryProducts, updateQuery } from '../../actions/search_actions';
import { requestUpvote } from '../../actions/upvote_actions';

const mapStateToProps = (state, ownProps) => ({
  searchResults: state.search.byId || null

});

const mapDispatchToProps = dispatch => ({
  requestQueryProducts: (query) => dispatch(requestQueryProducts(query)),
  requestUpvote: (upvote) => dispatch(requestUpvote(upvote)),
  updateQuery: (query) => dispatch(updateQuery(query))
});

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Search));


const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
