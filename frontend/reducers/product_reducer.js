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
  let nextState;

  switch(action.type) {

    case RECEIVE_PRODUCTS:

    // console.log(byId);
    // console.log(allIds);
    // nextState = Object.assign({}, _defaultState, action.products);
    //   return nextState;
  //     action.products.forEach( product => {
  //       byId[product.id] = product;
  //       allIds.push(product.id);
  //     });
    let allProducts = Object.keys(action.products);
      console.log(allProducts);
      allProducts.forEach( product => {
        console.log(product);
        allIds.push(product["id"]);
        byId[product["id"]] = product;
      });
  // //   //   //
  // //     // console.log(allIds);
  // //     // console.log(byId);
      return merge({}, state, { byId }, { allIds });
      // return merge({}, state, action.products);

    case RECEIVE_PRODUCT:
      return merge({},
        state,{ byId: {[action.product.id]: action.product} });

    case RECEIVE_PRODUCT_ERRORS:
      return merge({}, state, { errors: action.errors });

    case CLEAR_PRODUCT_ERRORS:
       return merge({}, state, { errors: null });

    default:
      return state;
  }
};



export default ProductReducer;
