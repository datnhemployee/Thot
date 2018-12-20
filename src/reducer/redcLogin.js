import ActionType from '../actions/actType';
import Message from '../constant/message';

const INITIAL_STATE = {
  token: undefined,
  // errType: undefined,
  // username: undefined,
  // password: undefined,
  // info: undefined,
}

export default function (
  state = INITIAL_STATE,
  action,
) {
    console.log('===============================');
    console.log('action.error: '+ (action.error));
    console.log('action.type: '+ (action.type ));
    console.log('===============================');
    // console.log('INPUT_USERNAME_CHANGES: '+ (ActionType.INPUT_USERNAME_CHANGES ));
    // console.log('action.type: '+ (action.type === ActionType.INPUT_USERNAME_CHANGES));
    
    switch (action.type) {
    case ActionType.LOGING_IN_NO_TOKEN:
    case ActionType.LOGING_IN_WITH_TOKEN:
        if(!action.error) {
          return {
            ...state,
            ...{
              token: action.payload,
              errType: undefined,
            }
          }
        } else {
          return {
            ...state,
            ...{
              errType: action.payload,
            }
          }
        }
    case ActionType.INPUT_USERNAME_CHANGES:
      if(!action.error) {
        console.log('recd: '+ JSON.stringify({
          ...state,
          ...{
            username: action.payload,
          }}));
        return {
          ...state,
          ...{
            username: action.payload,
            errType: undefined,
          }
        }
      } else {
        return {
          ...state,
          ...{
            errType: action.payload,
          }
        }
      }
    case ActionType.INPUT_PASSWORD_CHANGES:
    if(!action.error) {
        return {
          ...state,
          ...{
            password: action.payload,
            errType: undefined,
          }
      }
    } else {
      return {
        ...state,
        ...{
          errType: action.payload,
        }
      }
    }
    case ActionType.GET_USER_INFO:
    if(!action.error) {
      return {
        ...state,
        ...{
          info: action.payload,
          errType: undefined,
        }
      }
    } else {
      return {
        ...state,
        ...{
          errType: action.payload,
        }
      }
    }
    case ActionType.LOG_OUT:
    // if(!action.error) {
    //   return {
    //     errType: undefined,
    //   }
    // } else {
      return {}
    // }
    default:
      return {
        ...state,
      }
  }
}