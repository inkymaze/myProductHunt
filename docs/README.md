
## Minimum Viable Product
This clone is of Product Hunt and the features will be products, profile page, product discussion (with comments) and searchable (users/products).

## Implementation Timeline

### Phase I: Backend setup and Front End User Authentication (2 days)
  **Objective:** Functioning rails project including front-end authentication
    - User model and migration
    - Backend Auth
    - StaticPages controller and root view
    - Webpack config
    - Setup React and Redux modules
    - Frontend Auth
    - Build login/signup components
    - apply CSS to components
    - Seed users

### Phase II: Products components, model and API (2 days)
  **Objective:** Ability to add and view products
    - Product Model
    - Jbuilder API views for products
    - Build components for AddProductForm, ProductListItem, ProductList, ProductListContainer
    - apply CSS to components
    - Seed Products

### Phase III: Users with profile pages (1 day)
  **Objective:** Users profiles are accessible
    - API on UsersController to create, read, update
    - Jbuilder API views for user profiles
    - Build user component for UserDetail
    - apply CSS to user component

### Phase IV: Comments (1 days)
  **Objective:** Comments can be added to discussion
    - API on CommentsController to create and read
    - Build components for  CommentList, AddCommentContainer, AddCommentForm
    - apply CSS to components
    - Seed Comments

### Phase V: Search features (1.5 days)
  **Objective:** Searchable products and users
    - AutoSearch in JBuilder navigation view
    - Search Components: AutoSearch and AutoSearchResults

### Bonus Features:
    - Add hunter (user) to product
    - Ability to up vote
    - Users can create collections
