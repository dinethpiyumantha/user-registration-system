// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './feature-auth/reducer';

export default rootReducer = combineReducers({
  auth: authReducer,
});
