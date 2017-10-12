import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';
import UserReducer    from './user_reducer';
import SearchReducer from  './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  users: UserReducer,
  search: SearchReducer,
});

export default rootReducer;
