import ActionType from './actType';
import { token } from '../constant/connection';
import UserManager from '../api/UserManager';
import LocalStore from '../store/local';

const getUserInfo_ID = (data) => async (dispatch) =>{
  try{
    const res = await UserManager.getUserInfo_ID(data); 
    console.log('getUserInfo_ID: '+ JSON.stringify(res));
    if(!res.data.error){
      dispatch({
        type: ActionType.GET_USER_INFO_ID,
        payload: {
          ...res.data,
        },
      }); 
    } else {
      dispatch({
        type: ActionType.GET_USER_INFO_ID,
        error: true,
      }); 
    }
  }catch (err) {
    dispatch({
      type: ActionType.GET_USER_INFO_ID,
      error: true,
    }); 
  }
}

const getUserInfo_nickName = (data) => async (dispatch) =>{
  try{
    console.log('User nè: ',JSON.stringify(data));
    
    const res = await UserManager.getUserInfo_nickName(data); 
    console.log('getUserInfo_nickName: '+ JSON.stringify(res));
    if(!res.data.error){
      dispatch({
        type: ActionType.GET_USER_INFO_NICKNAME,
        payload: res.data,
      }); 
    } else {
      dispatch({
        type: ActionType.GET_USER_INFO_NICKNAME,
        error: true,
      }); 
    }
  }catch (err) {
    dispatch({
      type: ActionType.GET_USER_INFO_NICKNAME,
      error: true,
    }); 
  }
}

export {
  getUserInfo_ID,
  getUserInfo_nickName,
};