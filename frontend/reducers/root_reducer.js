import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';
import UserReducer    from './user_reducer';
import SearchReducer from  './search_reducer';
import CommentReducer from  './comment_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  users: UserReducer,
  search: SearchReducer,
  comments: CommentReducer,
});

export default rootReducer;
