import ActionType from './actType';
import { token } from '../constant/connection';
import axios from 'axios';
import Connection from '../constant/connection';
import UserManager from '../api/UserManager';
import ErrorType from '../constant/ErrorType'

const save = (
  username,
  dishID,
) => async (
  dispatch
) =>{
  try{
    const dishes = await DishManager.save(username,page);
    if(dishes.length != 0){
      dispatch({
        type: ActionType.SAVE,
        payload: dishID,
      });
      
    } else {
      await dispatch({
        type: ActionType.SAVE,
        payload: ErrorType.Server.NoPost,
        error: true,
      });
    }
  } catch (err) {
      await dispatch({
        type: ActionType.SAVE,
        payload: ErrorType.Client.Connection,
        error: true,
      }); 
      console.log(err);
  }
}

const logOut = () => async (dispatch) => {
  dispatch({type: ActionType.LOG_OUT});
}

export {
  get,
  logOut,
};
