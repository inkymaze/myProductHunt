
## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**NavigationContainer**
  - SearchBar

**HomeContainer**
  - NavigationContainer
  - ProductList
    - ProductDetail

**ProductContainer**
  - ProductDetail
  - CommentList
    - UserDetail
  - AddCommentContainer
    - AddCommentForm

**UserContainer**
  - NavigationContainer
  - UserDetail

**AddProductContainer**
  - AddProductForm


## Routes

| Path    | Component |
|---------|-----------|
| '/' | 'HomeContainer' |
| '/:productId' | 'ProductContainer' |
| '/:user_id' | 'UserContainer' |
| '/login' | 'AuthFormContainer' |
| '/signup' | 'AuthFormContainer' |
| '/add-product' | 'ProductContainer' |
