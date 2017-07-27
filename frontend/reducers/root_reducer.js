import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';
import UserReducer    from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  users: UserReducer,
});

export default rootReducer;
