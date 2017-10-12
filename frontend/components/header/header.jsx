import React from 'react';
import WelcomeContainer from '../intro/intro_container';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search';

const Header = (props) => (
  <div className="homepageHeader">
      <div className='logoWithTitle'>
        <div className="header-link">
          <Link to="/" >
            <img className='header-logo' src=
              "http://res.cloudinary.com/dbyoymbpd/image/upload/c_crop,h_360,w_360/v1503343801/ph-logo-2_jztzta.png"  />
          </Link>
        </div>
        <div className="header-title">
          <h2 className="header-title">Product Hunt</h2>
          <h3 className="header-description">The best new products, every day</h3>
        </div>
      </div>
      <div className="search">

        <div className="search-form">
          <div className="search-icon">
            <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M9.383 10.347c-.987.78-2.233 1.244-3.588 1.244C2.595 11.59 0 8.997 0 5.796 0 2.595 2.595 0 5.795 0c3.2 0 5.796 2.595 5.796 5.795 0 1.355-.464 2.6-1.243 3.588L15 14.036l-.964.964-4.653-4.653zm-3.588-.12c2.448 0 4.432-1.984 4.432-4.432 0-2.447-1.984-4.43-4.432-4.43-2.447 0-4.43 1.983-4.43 4.43 0 2.448 1.983 4.432 4.43 4.432z" fill="#BBB" fillRule="evenodd"></path></svg>
          </div>
          <SearchContainer />

        </div>
      </div>
      <div>
        <GreetingContainer />
      </div>
  </div>
);

export default Header;
