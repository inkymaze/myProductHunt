import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import { receiveProducts } from './actions/product_actions';
import * as APIUtil from './util/product_api_util';


document.addEventListener('DOMContentLoaded', () => {
  // Modal.setAppElement(document.body);

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: null} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.receiveProducts = receiveProducts;
  window.fetchProducts = APIUtil.fetchProducts;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
