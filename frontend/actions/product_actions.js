import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CLEAR_PRODUCT_ERRORS = "CLEAR_PRODUCT_ERRORS";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = (products) => ({
  type: RECEIVE_PRODUCT,
  products
});

export const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const requestProducts = () => dispatch => {
  return APIUtil.fetchProducts().then( products => {
        dispatch(receiveProducts(products));
    },
    errors => dispatch(receiveProductErrors(errors.responseJSON))
  );
};

export const requestProduct = (id) => dispatch => {
  return APIUtil.fetchProduct(id).then( products => {
      dispatch(receiveProduct(products));
    },
    errors => dispatch(receiveProductErrors(errors.responseJSON))
  );
};

export const requestCreateProduct = (product) => dispatch => {
  return APIUtil.createProduct(product).then( prod => {
        return dispatch(receiveProduct(prod));
      },
    errors => dispatch(receiveProductErrors(errors.responseJSON))
  );
};


export const requestUpdateProduct = (product) => dispatch => {
  return APIUtil.updateProduct(product).then( prod => {
        dispatch(receiveProduct(prod));
      },
    errors => dispatch(receiveProductErrors(errors.responseJSON))
  );
};

export const requestUserProducts = (userId) => dispatch => {
  return APIUtil.fetchUserProducts(userId).then( products => {
        dispatch(receiveProducts(products));
      },
    errors => dispatch(receiveProductErrors(errors.responseJSON))
  );
};
