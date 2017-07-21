import merge from 'lodash/merge';

import {  RECEIVE_PRODUCTS,
          RECEIVE_PRODUCT,
          RECEIVE_PRODUCT_ERRORS,
       } from '../actions/product_actions';

const _defaultState ={
  byId: {},
  allIds: [],
  errors: null
};

const ProductReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let byId, allIds, nextState;

  switch(action.type) {
    case RECEIVE_PRODUCTS:
      action.products.forEach( product => {
        byId[product.id] = product;
        allIds.push(product.id);
      });
      return merge({}, state, { byId }, { allIds });

    case RECEIVE_PRODUCT:
      return merge({},
        state,{ byId: {[action.product.id]: action.product} });

    case RECEIVE_PRODUCT_ERRORS:
      return merge({}, state, { errors: action.errors });

    default:
      return state;
  }
};



export default ProductReducer;
