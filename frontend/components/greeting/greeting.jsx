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

const handleLogout = (logout, history) => () => {
  logout().then(() => history.push('/'));
};

const personalGreeting = (currentUser, logout, history) => (
	<hgroup className="header-group">
    <div className='addProductButton'>
      <Link to='/products/new' style={{color:'#999'}}>+</Link>
    </div>
    <div className='userProfileButton'>
      <Link to={`/user/${currentUser.id}`} style={{color:'#999'}}>@{currentUser.username}</Link>
    </div>
    <button className="logout-header-button" onClick={handleLogout(logout, history)}>LOG OUT</button>

	</hgroup>
);

const Greeting = (props) => {
  return (
    props.currentUser
      ? personalGreeting(props.currentUser, props.logout, props.history)
      : sessionLinks()
  );
};

export default Greeting;
