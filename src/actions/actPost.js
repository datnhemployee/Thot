import ActionType from './actType';
import { token } from '../constant/connection';
import axios from 'axios';
import Connection from '../constant/connection';
import UserManager from '../api/UserManager';
import ErrorType from '../constant/ErrorType'

const get = (
  page,
) => async (
  dispatch
) =>{
  try{
    const dishes = await PostManager.get(page);
    if(dishes.length != 0){
      dispatch({
        type: ActionType.GET,
        payload: dishes,
        page: page + 1,
      });
      
    } else {
      await dispatch({
        type: ActionType.GET,
        payload: ErrorType.Client.NoPost,
        error: true,
      });
    }
  } catch (err) {
      await dispatch({
        type: ActionType.GET,
        payload: ErrorType.Server.Get,
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
