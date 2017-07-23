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
        <ProtectedRoute exact path='/products/new' component={AddProductFormContainer} />

      </Switch>

  </div>
);

export default App;
