import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import WelcomeContainer from './intro/intro_container';
import AddProductFormContainer from './product/add_product_form_container';
import ProductListContainer from './product/product_list_container';
import ProductDetailContainer from './product/product_detail_container';
import UserProfileContainer from './users/user_profile_container';
import SearchContainer from './search/search_container';
import GreetingContainer from './greeting/greeting_container';
import Header from './header/header';


const App = () => (
  <div>
      <div className="nav-bar">
        <Header />
        <SearchContainer />
        <GreetingContainer />
      </div>
      <WelcomeContainer />

      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path='/products/new' component={AddProductFormContainer} />
        <Route exact path='/user/:userId' component={UserProfileContainer} />
        <Route path='/products/:productId' component={ProductDetailContainer} />
        <Route exact path="/" component={ProductListContainer} />
      </Switch>
  </div>
);

export default App;
