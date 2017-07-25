import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import WelcomeContainer from './intro/intro_container';
import AddProductFormContainer from './product/add_product_form_container';
import ProductListContainer from './product/product_list_container';
import ProductDetailContainer from './product/product_detail_container';
// <h2 className="header-title">Product Hunt</h2>
// <h3>The best new products, every day</h3>
// <Route path="/" component={ProductListContainer} />

// let searchIcon = <i class="fa fa-search" aria-hidden="true"></i>; // for search icon to search bar that I will add later
const App = () => (
  <div>
    <header>
      
      <Link to="/" className="header-link">
        <img src="http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,h_65,q_100,w_65/v1500499099/logo_pjzgg0.jpg"/>
      </Link>


      <input type="text"  className="search-bar" placeholder="Discover your next favorite thing..."></input>
      <GreetingContainer />
    </header>

      <WelcomeContainer />

      <Switch>

        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/" component={ProductListContainer} />
        <ProtectedRoute exact path='/add-product' component={AddProductFormContainer} />
        <Route path='/products/:productId' component={ProductDetailContainer} />
      </Switch>

  </div>
);

export default App;
