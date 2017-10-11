import merge from 'lodash/merge'
import { RECEIVE_QUERY_PRODUCTS, UPDATE_QUERY } from '../actions/search_actions'

const _defaultState ={
  byId: {},
  allIds: [],
  query: ""
};

const SearchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let byId = {};
  let allIds = [];

  switch(action.type) {
    case UPDATE_QUERY:
      return merge({}, state, {query: action.query});
    case RECEIVE_QUERY_PRODUCTS:
      // must figure how products come into reducer 
      return _defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
