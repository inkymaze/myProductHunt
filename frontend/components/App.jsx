import React from 'react';
import { Provider } from 'react-redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';
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

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <img src="http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,h_65,q_100,w_65/v1500499099/logo_pjzgg0.jpg"/>
      </Link>

      <input type="text"  class="search-bar" placeholder="Discover your next favorite thing..."></input>
      <GreetingContainer />
    </header>
    <span className="intro-span">
    <div className="intro-greeting">
      <h1>Discover your next favorite thing</h1>
      <h6>Product Hunt surfaces the best new products, every day.
        It's a place for product-loving enthusiasts to share and
        geek out about the latest mobile apps, websites,
        hardware projects, and tech creations</h6>
      <Link className="intro-signup" to="/signup">SIGN UP</Link>
    </div>
    <div className="kitty">
      <img src="https://s3.producthunt.com/static/kitty_265x244%402x.png"/>
    </div>
    </span>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>

  </div>
);

export default App;
