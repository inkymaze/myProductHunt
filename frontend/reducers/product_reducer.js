import merge from 'lodash/merge';

import {  RECEIVE_PRODUCTS,
          RECEIVE_PRODUCT,
          RECEIVE_PRODUCT_ERRORS,
          CLEAR_PRODUCT_ERRORS
       } from '../actions/product_actions';

const _defaultState ={
  byId: {},
  allIds: [],
  errors: null
};

const ProductReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let byId = {};
  let allIds = [];

  switch(action.type) {

    case RECEIVE_PRODUCTS:
      const newObj = merge({},state);
      newObj.byId = action.products;
      newObj.allIds = Object.keys(action.products);

      return newObj;

    case RECEIVE_PRODUCT:
      return merge({},
        state,{ byId: {[action.products.id]: action.products} });

    case RECEIVE_PRODUCT_ERRORS:
      return merge({}, state, { errors: action.errors });

    case CLEAR_PRODUCT_ERRORS:
       return merge({}, state, { errors: null });

    default:
      return state;
  }
};



export default ProductReducer;
