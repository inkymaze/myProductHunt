# Product Hunt Clone

[Live](https://myproducthunt.herokuapp.com/#/)

My version of Product Hunt is a full-stack web application attempting to make a pixel perfect clone of the original. The backend uses Ruby on Rails with a PostgreSQL database. The frontend implements a Redux framework through React.js.

![homescreen](http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_1366/v1501261154/Screen_Shot_2017-07-28_at_9.58.12_AM_waegtc.png)

## Features & Implementation

### Single-Page application

My Product Hunt clone delivers the content on one static page. It is a single-page app. The frontend has no access to sensitive information because the controllers on the backend filter the information prior. This is done through API calls to the Ruby on Rails backend.

### Product Creation and Viewing


The database table for products contains columns for `name`, `description`,
`image_url`, `hunter_id`, `product_url`, and four additional product image urls. The product list component exists on the homepage below an intro greeting if a user is not signed in.

Each product has an attached modal containing more detail. The modal contains an external link to the product's homepage. Along with the logo an additional four images can be viewed as well. The product detail also includes a link to the user profile who hunted or created the product.

When logged in the user can click the '+' sign in the header to open a model the will allow creation of a new product.

![homescreen](http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_1366/v1501262981/Screen_Shot_2017-07-28_at_10.29.16_AM_gbgsee.png)

### User Profile Pages

When logged in the user profile can be reached by clicking on the username in the header. This will only appear when there is an active user. The edit button allows the user to change there image and/or there username.

![homescreen](http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_1366/v1501266403/Screen_Shot_2017-07-28_at_11.26.06_AM_gnndjv.png)

### Future Improvements

Users will be able to comment on products and have and ongoing discussion. Users will also be able to `upvote` products which will then be rendered in their corresponding profile for future reference. Instead of the username in the header the user's image will appear with a dropdown showing options to logout or be redirected to their profile.

### Additional Resources

* [Database Schema](docs/schema.md)
* [API Endpoints](docs/api-endpoints.md)
* [Design Wireframes](docs/wireframes)
* [Sample Redux State](docs/sample-state.md)
