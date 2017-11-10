import React from 'react';
import { Link } from 'react-router-dom';

const intro = () => (
  <div className="intro-outer-container">
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
  </div>
);

const emptyDiv = () => (
  <div></div>
);

const Welcome = ({ currentUser }) => (
  currentUser ? emptyDiv() : intro()
);

export default Welcome;
