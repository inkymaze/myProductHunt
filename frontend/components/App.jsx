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
      <GreetingContainer />
    </header>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
