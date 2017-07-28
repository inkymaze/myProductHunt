# Product Hunt Clone

[heroku]: https://myproducthunt.herokuapp.com/#/

My version of Product Hunt is a full-stack web application attempting to make a pixel perfect clone of the orginal. The backend uses Ruby on Rails with a PostgreSQL database. The frontend implements a Redux framework through React.js.

![homescreen](http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_1366/v1501261154/Screen_Shot_2017-07-28_at_9.58.12_AM_waegtc.png)

## Features & Implementation

### Single-Page application

My Product Hunt clone delivers the content on one static page. It is a single-page app. The frontend has no access to sensitive information because the controllers on the backend filter the information prior. This is done through API calls to the Ruby on Rails backend.

### Product Creation and Viewing


The database table for products contains columns for `name`, `description`,
`image_url`, `hunter_id`, `product_url`, and four additional product image urls. The product list component exists on the homepage below an intro greeting if a user is not signed in.

Each product has an attached modal containing more detail. The modal contains an external link to the product's homepage. Along with the logo an additional four images can be viewed as well. The product detail also includes a link to the user profile who hunted or created the product.

When logged in the user can click the '+' sign in the header to open a model the will allow creation of a new product.

![productform](http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_1366/v1501262981/Screen_Shot_2017-07-28_at_10.29.16_AM_gbgsee.png)

### User Profile Pages

When logged in the user profile can be reached by clicking on the username in the header. This will only appear when there is an active user.
