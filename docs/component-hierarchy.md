
## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Navigation
  - ProductList
    - ProductDetail

**ProductContainer**
  - ProductDetail
  - DiscussionContainer
    - DiscussionList
      - UserDetail
    - AddCommentContainer
      - AddCommentForm

**AddProductContainer**
  - AddProductForm



## Routes

| Path    | Component |
|---------|-----------|
| '/' | 'HomeContainer' |
| '/:productId' | 'ProductContainer' |
| '/login' | 'AuthFormContainer' |
| '/signup' | 'AuthFormContainer' |
| '/add-product' | 'ProductContainer' |
