import ActionType from './actType';
import { token } from '../constant/connection';
import UserManager from '../api/UserManager';
import LocalStore from '../store/local';

const register = (data,success,failed) => async (dispatch) =>{
  try{
    
    const res = await UserManager.register(data); 
    console.log('res: '+ JSON.stringify(res));
    if(!res.data.error){
      dispatch({
        type: ActionType.REGISTER,
        payload: {
          ...data,
          ...{
            token: res.data.token,
            _id: res.data._id,
          },
        },
      }); 
      success('Đăng kí thành công');
    } else {
      dispatch({
        type: ActionType.REGISTER,
        error: true,
      }); 
      failed(res.data.error);
    }
  }catch (err) {
    dispatch({
      type: ActionType.REGISTER,
      error: true,
    }); 
    failed('Không thể kết nối server');
  }
}

const logInWithAuth = (auth,success,failed) => async (dispatch) =>{
  try{
    let {
    username, 
    password
    } = auth;
    console.log('here: ' + JSON.stringify(auth));
    console.log('here: ' + username);
    let res = await UserManager.logInWithAuth(
      username,
      password
    );
    console.log('res: '+ JSON.stringify(res));
    if(!res.data.error){
      dispatch({
        type: ActionType.LOGING_IN_NO_TOKEN,
        payload: {
          token: res.data.token,
          _id: res.data._id,
        }
      });
      // LocalStore.setToken(token);
      success('Đăng nhập thành công');
    } else {
      await dispatch({
        type: ActionType.LOGING_IN_NO_TOKEN,
        error: true,
      });
      failed(res.data.error);
    }
  } catch (err) {
      await dispatch({
        type: ActionType.LOGING_IN_NO_TOKEN,
        error: true,
      }); 
    failed('Không thể kết nối server');
  }
}

const logInWithToken = (success,failed) => async (dispatch) =>{
  try{
    let result = await UserManager.logInWithToken();
    if(!result.data.error){
      dispatch({
        type: ActionType.LOGING_IN_WITH_TOKEN,
        payload:{
          ...result,
        },
      });
      success(result.data);
    } else {
      await dispatch({
        type: ActionType.LOGING_IN_WITH_TOKEN,
        error: true,
      });
      failed(result.data.error);
    }
  } catch (err) {
    await dispatch({
      type: ActionType.LOGING_IN_WITH_TOKEN,
      error: true,
    }); 
    failed('Không thể kết nối server');
  }
}

const logOut = () => async (dispatch) => {
  dispatch({type: ActionType.LOG_OUT});
}

export {
  logInWithAuth,
  logInWithToken,
  logOut,
  register,
};
