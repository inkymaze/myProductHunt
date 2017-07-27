import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
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
    <div className='addProductButton'>
      <Link to='/products/new' style={{color:'#999'}}>+</Link>
    </div>
    <div className='userProfileButton'>
      <Link to={`/user/${currentUser.id}`} style={{color:'#999'}}>{currentUser.username}</Link>
    </div>
    <button className="header-button" onClick={logout}>LOG OUT</button>

	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);



export default Greeting;
