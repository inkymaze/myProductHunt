# Product Hunt Clone


My version of Product Hunt is a full-stack web application attempting to make a pixel perfect clone of the original. The backend uses Ruby on Rails with a PostgreSQL database. The frontend implements a Redux framework through React.js.

![homescreen](https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_1366/v1508974585/Screen_Shot_2017-10-25_at_4.35.50_PM_mr8gyf.png)

## Features & Implementation

### Single-Page application

My Product Hunt clone delivers the content on one static page. It is a single-page app. The frontend has no access to sensitive information because the controllers on the backend filter the information prior. This is done through API calls to the Ruby on Rails backend.

### Product Viewing

Each product navigates to a modal with additional detail when clicked. The modal contains an external link to the product's homepage. An additional four product images can be viewed on a timed slider as well. The product detail also includes a link to the user profile who hunted the product and an attached discussion section below.

![homescreen](https://res.cloudinary.com/dbyoymbpd/image/upload/v1512269455/Screen_Shot_2017-12-02_at_6.50.09_PM_fhdcge.png)

### User Profile Pages

When logged in the user profile can be reached by clicking on their username in the header. This will only appear when there is an active user. The edit button allows the user to change their image and/or their handle.
![homescreen](https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_1366/v1508974280/Screen_Shot_2017-10-25_at_4.30.22_PM_zt1ec0.png)

### Additional Resources

* [Database Schema](docs/schema.md)
* [API Endpoints](docs/api-endpoints.md)
* [Design Wireframes](docs/wireframes)
