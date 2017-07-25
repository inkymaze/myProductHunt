import React from 'react';
import { Link } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import SessionForm from '../session_form/session_form';
import AddProductFormContainer from '../product/add_product_form_container';

const sessionLinks = () => (
  <nav>
    <ul className="nav-buttons">
      <Link className="login" to="/login">LOG IN</Link>
      <Link className="signup" to="/signup" >SIGN UP</Link>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">{currentUser.username}</h2>
    <Route exact path="/" component={AddProductFormContainer} />
    <button className="header-button" onClick={logout}>LOG OUT</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);



export default Greeting;
