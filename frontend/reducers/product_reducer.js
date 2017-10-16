import merge from 'lodash/merge';

import {  RECEIVE_PRODUCTS,
          RECEIVE_PRODUCT,
          RECEIVE_PRODUCT_ERRORS,
          CLEAR_PRODUCT_ERRORS
       } from '../actions/product_actions';

import { CREATE_UPVOTE } from '../actions/upvote_actions';


const _defaultState ={
  byId: {},
  allIds: [],
  errors: []
};

const ProductReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let byId = {};
  let allIds = [];
  let newObj = {};
  switch(action.type) {

    case RECEIVE_PRODUCTS:
      newObj = merge({},state);
      newObj.byId = action.products;
      newObj.allIds = Object.keys(action.products);

      return newObj;

    case RECEIVE_PRODUCT:
      return merge({},
        _defaultState,{ byId: {[action.products.id]: action.products} },
          {allIds: [action.products.id]});

    case RECEIVE_PRODUCT_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });

    case CREATE_UPVOTE:
      newObj = merge({},state);
      newObj.byId[action.upvote.productId].upvotes += 1;
      return newObj;

    default:
      return state;
  }
};



export default ProductReducer;
