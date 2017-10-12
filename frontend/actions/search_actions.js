import { searchProducts } from '../util/search_util';


// export const UPDATE_QUERY ="UPDATE_QUERY";
export const RECEIVE_QUERY_PRODUCTS = "RECEIVE_QUERY_PRODUCTS";

// export const updateQuery = query => ({
//   type: UPDATE_QUERY,
//   query
// });

export const receiveQueryProducts = products => ({
  type: RECEIVE_QUERY_PRODUCTS,
  products
});

export const requestQueryProducts = query => dispatch => {
  return searchProducts(query)
    .then((products) => dispatch(receiveQueryProducts(products)));
};
