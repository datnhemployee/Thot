import ActionType from './actType';
import { token } from '../constant/connection';
import axios from 'axios';
import Connection from '../constant/connection';
import UserManager from '../api/UserManager';
import ErrorType from '../constant/ErrorType'

const logInNoToken = (
    auth
) => async (
  dispatch
) =>{
  let {
    username, 
    password
  } = auth;
  console.log('here: ' + JSON.stringify(auth));
  console.log('here: ' + username);
  
  try{
  
    let manager = new UserManager({username,password});
    let token = await manager.getTokenFromDB();
    console.log(token);
    if(token.length != 0){

      let localStore = LocalStorage.getInstance();
      await localStore.setToken(token);

      dispatch({
        type: ActionType.LOGING_IN_NO_TOKEN,
        payload: token,
          /** ISSUE 
           * @name WRONG_ACTION
           * @template NOT_RELEVANT_STATE_FOR_ACTION  
           * @example 
           *  ...
           *  isPopUp: true,
           *  alert: notification.LogInSuc_Tile,
           *  alertContent: notification.LogInSuc,
           *  ...
           * @see issue.js 
           */
      });
      
    } else {
      await dispatch({
        type: ActionType.LOGING_IN_NO_TOKEN,
        payload: ErrorType.Client.LogIn,
        error: true,
      });

      /** ISSUE 
       * @name WRONG_ACTION
       * @template NO_NEED_VARIABLES_FOR_EXCEPTION  
       * @example 
       *  ...
       *  scienarios: scienarios.SUCCESSFULL,
       *  ...
       * @see issue.js 
       * }
       */

      /** ISSUE 
       * @name WRONG_STATE
       * @template NOT_RELEVANT_STATE_FOR_ACTION  
       * @example 
       *  ...
       *  isPopUp: true,
       *  alert: notification.LogInSuc_Tile,
       *  alertContent: notification.LogInSuc,
       *  ...
       * @see issue.js 
       * }
       */
    }
  } catch (err) {
      await dispatch({
        type: ActionType.LOGING_IN_NO_TOKEN,
        payload: ErrorType.Server.LogIn,
        error: true,
      }); 
  }
}

const logInWithToken = () => async (dispatch) =>{
  try{

      if(token){
        dispatch({
          type: ActionType.LOGING_IN_WITH_TOKEN,
          payload:token,
      });
     } else {
      await dispatch({
        type: ActionType.LOGING_IN_WITH_TOKEN,
        payload: ErrorType.Client.LogIn,
        error: true,
      });
    }
  } catch (err) {
      await dispatch({
        type: ActionType.LOGING_IN_WITH_TOKEN,
        payload:  ErrorType.Server.LogIn,
        error: true,
      }); 
  }
}

const logOut = () => async (dispatch) => {
  dispatch({type: ActionType.LOG_OUT});
}

const inputLogInChange = (
  InputLogInType, 
  value) => async (dispatch) => {
  //check type of input
  
  console.log('inputLogInChange: '+ value);
  await dispatch({
    type: InputLogInType,
    payload: value,
  });
}

const inputUsername = (username) => inputLogInChange (
  ActionType.INPUT_USERNAME_CHANGES,
  username);

const inputPassword = (password) => inputLogInChange (
  ActionType.INPUT_PASSWORD_CHANGES,
  password);

// const getUserInfo = (
//   token = LocalStorage.getInstance().Token_DB,
//   ) => async (dispatch) => {
//   try{
//     let header = Connection.defHeader.reqInfo;
//     if(token){
//       let res = await axios.post( 
//         url,{},{
//           timeout: 3000,
//           data: {
//             token: token,
//           },
//           headers: {
//             'request-name': header,
//           },
//       });
//       let {
//         info,
//       } = res.data;
//       if(info){
//         dispatch({
//           type: ActionType.GET_USER_INFO,
//           payload: {
//             info: info,
//           }
//         });
//       } else {
//         dispatch({
//           type: ActionType.GET_USER_INFO,
//           payload: {
//             errType: ErrorType.Client.WrongToken,
//           },
//           error: true,
//         });
//       }
//     } else {
//     await dispatch({
//       type: ActionType.GET_USER_INFO,
//       payload: {
//         errType: ErrorType.Client.NoToken,
//       },
//       error: true,
//     });
//   }
// } catch (err) {
//     await dispatch({
//       type: ActionType.GET_USER_INFO,
//       payload: {
//         errType: ErrorType.Server.LogIn,
//       },
//       error: true,
//     }); 
// }
// }

export {
  logInNoToken,
  logInWithToken,
  inputUsername,
  inputPassword,
  getUserInfo,
  logOut,
};
