import { combineReducers } from 'redux';

// import other reducer
import redcLogin from './redcLogin';
import redcDish from './redcDish';
import redcComment from './redcComment';
import redcUser from './redcUser';
import redcDishDetail from './redcDishDetail';

// export root reducer

export default combineReducers({
  auth: redcLogin,
  dish: redcDish,
  comments: redcComment,
  user: redcUser,
  dishDetail: redcDishDetail,
});
