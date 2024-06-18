import authReducer from './authReducer';
import letterReducer from './letterReducer'
import { combineReducers } from 'redux';

//---------used predefined redux combined reducers--------
export default combineReducers({
  authReducer,
  letterReducer
});



