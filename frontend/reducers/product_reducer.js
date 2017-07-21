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


  switch(action.type) {
    case RECEIVE_PRODUCTS:


    case RECEIVE_PRODUCT:

    case RECEIVE_PRODUCT_ERRORS:


    default:
      return state;
  }
};



export default ProductReducer;
