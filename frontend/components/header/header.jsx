import React from 'react';
import WelcomeContainer from '../intro/intro_container';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
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
        

      </div>
    );
  }
}

export default Header;
