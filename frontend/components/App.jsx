import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import WelcomeContainer from './intro/intro_container';
import AddProductFormContainer from './product/add_product_form_container';
import ProductListContainer from './product/product_list_container';
import ProductDetailContainer from './product/product_detail_container';
import UserProfileContainer from './users/user_profile_container';
import Header from './header/header';
// / let searchIcon = <i class="fa fa-search" aria-hidden="true"></i>; // for search icon to search bar that I will add later

const App = () => (

  <div>
      <Header />
      <WelcomeContainer />

      <Switch>

        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path='/products/new' component={AddProductFormContainer} />
        <Route exact path='/users/:userId' component={UserProfileContainer} />
        <Route path='/products/:productId' component={ProductDetailContainer} />
        <Route path="/" component={ProductListContainer} />

      </Switch>
  </div>
);

export default App;
