import ActionType from './actType';
import { token } from '../constant/connection';
import DishManager from '../api/DishManager';
import LocalStore from '../store/local';

const getDish_ByID = (data) => async (dispatch) =>{
  try{
    
    const res = await DishManager.getDish_ID(data); 
    console.log('getDish_ID: '+ JSON.stringify({...res.data}));
    if(!res.data.error){
      dispatch({
        type: ActionType.GET_DISH_ID,
        payload: {...res.data},
      }); 
    } else {
      dispatch({
        type: ActionType.GET_DISH_ID,
        error: true,
      }); 
    }
  }catch (err) {
    dispatch({
      type: ActionType.GET_DISH_ID,
      error: true,
    }); 
  }
}

export {
  getDish_ByID,
};