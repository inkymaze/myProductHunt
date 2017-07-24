import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';

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
    <button className="header-button" onClick={logout}>LOG OUT</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);



export default Greeting;
