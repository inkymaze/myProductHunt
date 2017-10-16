import merge from 'lodash/merge';
import { RECEIVE_QUERY_PRODUCTS, UPDATE_QUERY } from '../actions/search_actions';

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
      console.log('receiveQueryProducts');
      console.log('state', state);
      console.log('action.products', action.products);
      
      if (action.products) {
        action.products.forEach(product => {
          byId[product.id] = product;
          allIds.push(product.id);
        });
      }
      return merge({}, _defaultState, {byId}, {allIds});
    default:
      return state;
  }
};

export default SearchReducer;
