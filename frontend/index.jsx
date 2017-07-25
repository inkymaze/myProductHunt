import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import { receiveProducts, receiveProduct, requestProduct, requestProducts  } from './actions/product_actions';
import * as APIUtil from './util/product_api_util';


document.addEventListener('DOMContentLoaded', () => {
  // Modal.setAppElement(document.body);

  let store;
  if (window.currentUser) {
    // add product slice of state below?
    const preloadedState = { session: { currentUser: window.currentUser, errors: null} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.requestProduct = requestProduct;
  window.requestProducts = requestProducts;
  window.receiveProducts = receiveProducts;
  window.receiveProduct = receiveProduct;
  window.fetchProducts = APIUtil.fetchProducts;
  window.fetchProduct = APIUtil.fetchProduct;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
