import { combineReducers } from 'redux';

// import other reducer
import redcLogin from './redcLogin';

// export root reducer

export default combineReducers({
  auth: redcLogin,
});
